import { ALL_SHOWCASE_ITEMS } from './studio-data';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export interface ShowcaseSettings {
  showProjectDetails: boolean;
  showBudget: boolean;
  showLocation: boolean;
  showEstimateCTA: boolean;
  showWhatsAppCTA: boolean;
}

export const DEFAULT_SHOWCASE_SETTINGS: ShowcaseSettings = {
  showProjectDetails: true,
  showBudget: true,
  showLocation: true,
  showEstimateCTA: true,
  showWhatsAppCTA: true,
};

export interface DecodedShowcase {
  clientName: string;
  projectSlugs: string[]; // Still called projectSlugs for legacy, but holds all item IDs
  settings: ShowcaseSettings;
}

/**
 * Compactly encodes showcase configuration for V1 Prototype without database.
 * Settings are stored in a single 5-bit integer (1 char).
 * Selected items are mapped to their array indices in ALL_SHOWCASE_ITEMS (2 chars per item).
 */
export function encodeShowcaseToken(clientName: string, itemIds: string[], settings: ShowcaseSettings): string {
  const safeName = clientName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  
  let settingsInt = 0;
  if (settings.showProjectDetails) settingsInt |= 1;
  if (settings.showBudget)         settingsInt |= 2;
  if (settings.showLocation)       settingsInt |= 4;
  if (settings.showEstimateCTA)    settingsInt |= 8;
  if (settings.showWhatsAppCTA)    settingsInt |= 16;
  
  const settingsChar = ALPHABET[settingsInt];
  
  const projectChars = itemIds.map(id => {
    const idx = ALL_SHOWCASE_ITEMS.findIndex(p => p.id === id);
    if (idx === -1) return ''; 
    // Convert idx to 2-character base 62 string
    const char1 = ALPHABET[Math.floor(idx / 62)];
    const char2 = ALPHABET[idx % 62];
    return `${char1}${char2}`;
  }).join('');
  
  return `${safeName}-${settingsChar}${projectChars}`;
}

export function decodeShowcaseToken(identifier: string): DecodedShowcase | null {
  const lastDash = identifier.lastIndexOf('-');
  if (lastDash === -1) return null;
  
  const clientName = identifier.substring(0, lastDash).replace(/-/g, ' ');
  const token = identifier.substring(lastDash + 1);
  
  if (token.length < 3) return null; // Needs at least 1 setting char + 2 project chars
  
  const settingsChar = token[0];
  const settingsInt = ALPHABET.indexOf(settingsChar);
  if (settingsInt === -1) return null;
  
  const settings: ShowcaseSettings = {
    showProjectDetails: (settingsInt & 1) !== 0,
    showBudget:         (settingsInt & 2) !== 0,
    showLocation:       (settingsInt & 4) !== 0,
    showEstimateCTA:    (settingsInt & 8) !== 0,
    showWhatsAppCTA:    (settingsInt & 16) !== 0,
  };
  
  const projectSlugs: string[] = [];
  
  // Parse chunks of 2 characters
  for (let i = 1; i < token.length; i += 2) {
    if (i + 1 >= token.length) break;
    const char1 = token[i];
    const char2 = token[i + 1];
    
    const val1 = ALPHABET.indexOf(char1);
    const val2 = ALPHABET.indexOf(char2);
    
    if (val1 !== -1 && val2 !== -1) {
      const idx = (val1 * 62) + val2;
      if (idx < ALL_SHOWCASE_ITEMS.length) {
        projectSlugs.push(ALL_SHOWCASE_ITEMS[idx].id);
      }
    }
  }
  
  if (projectSlugs.length === 0) return null;
  
  // Title case client name
  const formattedClientName = clientName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return {
    clientName: formattedClientName,
    projectSlugs,
    settings
  };
}
