"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  homeTypes, HomeType, spaceOptions, finishTiers, FinishTier, 
  timelines, maxBedroomsByConfig, calculateEstimate 
} from '@/data/calculator';
import { companyConfig } from '@/data/company';
import { generateEstimatePdf } from '@/lib/generateEstimatePdf';

export default function EstimateClient() {
  const [step, setStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Form State
  const [homeType, setHomeType] = useState<HomeType | "">("");
  const [sqft, setSqft] = useState<string>("");
  const [spaces, setSpaces] = useState<string[]>([]);
  const [finishTier, setFinishTier] = useState<FinishTier | "">("");
  const [timeline, setTimeline] = useState<string>("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [budgetVal, setBudgetVal] = useState<number>(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);

  // Results State
  const [isCalculating, setIsCalculating] = useState(false);
  const [calcPhase, setCalcPhase] = useState(0);
  const [estimateRange, setEstimateRange] = useState<[number, number] | null>(null);

  const budgetOptions = [
    "I'm not sure yet",
    "₹5L - ₹8L",
    "₹8L - ₹12L",
    "₹12L - ₹18L",
    "₹18L - ₹25L",
    "₹25L+"
  ];

  const handleSpaceToggle = (s: string) => {
    if (s === "Full Home") {
      if (spaces.includes("Full Home")) {
        setSpaces([]);
      } else {
        const maxBeds = homeType ? maxBedroomsByConfig[homeType] : 1;
        const newSpaces = ["Full Home", "Kitchen", "Living Room"];
        for(let i=0; i < maxBeds; i++) newSpaces.push("Bedroom(s)");
        setSpaces(Array.from(new Set(newSpaces)));
      }
      return;
    }

    if (spaces.includes(s)) {
      setSpaces(prev => prev.filter(x => x !== s && x !== "Full Home"));
    } else {
      setSpaces(prev => [...prev, s]);
    }
  };

  const handleNext = () => {
    setStep(s => s + 1);
  };

  const handleBack = () => {
    setStep(s => Math.max(1, s - 1));
  };

  const submitForm = () => {
    if (!homeType || !finishTier) return;
    
    setIsCalculating(true);
    setCalcPhase(0);

    const phases = [
      "Reviewing your requirements...",
      "Estimating project scope...",
      "Building your estimate range...",
      "Your estimate is ready."
    ];

    let currentPhase = 0;
    const interval = setInterval(() => {
      currentPhase++;
      if (currentPhase >= phases.length) {
        clearInterval(interval);
        const range = calculateEstimate({
          homeType,
          spaces,
          finishTier,
          sqft: sqft ? parseInt(sqft) : undefined
        });
        setEstimateRange(range);
        setIsCalculating(false);
        setStep(8);
      } else {
        setCalcPhase(currentPhase);
      }
    }, 875);
  };

  const downloadPdf = () => {
    if (!estimateRange || !homeType || !finishTier) return;
    generateEstimatePdf({
      customerName: name,
      phone,
      homeType,
      sqft: sqft ? parseInt(sqft) : undefined,
      spaces,
      finishTier,
      timeline,
      cityLocality: `${locality}, ${city}`,
      budget: budgetVal > 0 ? budgetOptions[budgetVal] : undefined,
      minEstimate: estimateRange[0],
      maxEstimate: estimateRange[1]
    });
  };

  const getWhatsappLink = () => {
    if (!estimateRange || !homeType || !finishTier) return "#";
    const text = `Hi, I just completed the interior estimate. \n\nName: ${name}\nProject: ${homeType} in ${locality}, ${city}\nScope: ${spaces.join(', ')}\nFinish: ${finishTier}\nIndicative Estimate: ₹${estimateRange[0]}L - ₹${estimateRange[1]}L\n\nI'd like to discuss this further.`;
    return `https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const renderContent = () => {
    if (isCalculating) {
      const phases = [
        "Reviewing your requirements...",
        "Estimating project scope...",
        "Building your estimate range...",
        "Your estimate is ready."
      ];
      return (
        <div className="estimate-shell calculating-shell">
          <div className="calculating-inner">
            <div className="spinner"></div>
            <h2>{phases[calcPhase]}</h2>
          </div>
        </div>
      );
    }

    if (step === 8 && estimateRange) {
      return (
        <div className="estimate-shell result-shell">
          <div className="estimate-result-box">
            <div className="eyebrow gold">YOUR ESTIMATED INTERIOR COST</div>
            <div className="result-price">₹{estimateRange[0]}L – ₹{estimateRange[1]}L</div>
            
            {budgetVal > 0 && (
              <div className="budget-mismatch-note">
                <strong>Your selected budget: {budgetOptions[budgetVal]}</strong>
                <p>Our design team can discuss specific materials, scope adjustments, and finish options to see what can be achieved within your preferred budget.</p>
              </div>
            )}

            <div className="result-summary">
              <div><span>Configuration</span><strong>{homeType} {sqft ? `(~${sqft} sqft)` : ''}</strong></div>
              <div><span>Selected Spaces</span><strong>{spaces.length} spaces</strong></div>
              <div><span>Finish</span><strong>{finishTier}</strong></div>
              <div><span>Location</span><strong>{locality}, {city}</strong></div>
              <div><span>Timeline</span><strong>{timeline}</strong></div>
            </div>

            <p className="result-disclaimer">
              This is an indicative estimate. Final pricing may vary based on exact measurements, specific design selections, materials, site conditions, hardware, and final execution scope.
            </p>

            <div className="result-actions">
              <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" className="gold-btn">
                Chat on WhatsApp
              </a>
              <button onClick={downloadPdf} className="outline-btn">
                Download Estimate PDF
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="estimate-shell progressive-shell">
        <div className="estimate-header">
          <div className="progress-text">Step {step} of 7</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / 7) * 100}%` }}></div>
          </div>
          <div className="estimate-live-status">
            {step > 1 ? "Estimate taking shape..." : "Let's build your estimate"}
          </div>
        </div>

        <div className="estimate-step-content">
          {step === 1 && (
            <div className="step-fade-in">
              <h2>What type of home are you designing?</h2>
              <div className="calc-options-grid">
                {homeTypes.map(h => (
                  <button key={h} className={`calc-option ${homeType === h ? 'selected' : ''}`} onClick={() => setHomeType(h)}>
                    {h}
                  </button>
                ))}
              </div>
              <div className="calc-input-group mt-xl">
                <label>Approx. home size (optional)</label>
                <div className="sqft-input-wrap">
                  <input type="number" placeholder="e.g. 1200" value={sqft} onChange={e => setSqft(e.target.value)} />
                  <span>sq.ft</span>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-fade-in">
              <h2>Which spaces do you want us to design?</h2>
              <p className="calc-hint">Select all that apply.</p>
              <div className="calc-options-grid">
                {spaceOptions.map(s => (
                  <button key={s} className={`calc-option ${spaces.includes(s) ? 'selected' : ''}`} onClick={() => handleSpaceToggle(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-fade-in">
              <h2>What level of finish are you looking for?</h2>
              <div className="finish-tier-grid">
                {finishTiers.map(t => (
                  <button key={t.id} className={`finish-tier-card ${finishTier === t.id ? 'selected' : ''}`} onClick={() => setFinishTier(t.id)}>
                    <div className="finish-img"><img src={t.image} alt={t.name} /></div>
                    <div className="finish-copy">
                      <strong>{t.name}</strong>
                      <p>{t.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="step-fade-in">
              <h2>When are you planning to start?</h2>
              <div className="calc-options-grid vertical">
                {timelines.map(t => (
                  <button key={t} className={`calc-option ${timeline === t ? 'selected' : ''}`} onClick={() => setTimeline(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="step-fade-in">
              <h2>Where is your home located?</h2>
              <p className="calc-hint">Location helps us make the estimate more relevant to local execution conditions.</p>
              <div className="calc-input-group">
                <label>City</label>
                <input type="text" placeholder="e.g. Bangalore" value={city} onChange={e => setCity(e.target.value)} />
              </div>
              <div className="calc-input-group mt-md">
                <label>Locality / Area</label>
                <input type="text" placeholder="e.g. Indiranagar" value={locality} onChange={e => setLocality(e.target.value)} />
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="step-fade-in">
              <h2>Do you already have a budget in mind?</h2>
              <p className="calc-hint">Optional. Helps us guide material and scope discussions.</p>
              <div className="budget-slider-wrap">
                <div className="budget-display">{budgetOptions[budgetVal]}</div>
                <input 
                  type="range" 
                  min="0" 
                  max={budgetOptions.length - 1} 
                  value={budgetVal} 
                  onChange={(e) => setBudgetVal(parseInt(e.target.value))}
                  className="budget-slider"
                />
                <div className="budget-slider-labels">
                  <span>Not sure</span>
                  <span>High</span>
                </div>
              </div>
            </div>
          )}

          {step === 7 && (
            <div className="step-fade-in">
              <h2>Where should we send your estimate?</h2>
              <div className="calc-input-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="calc-input-group mt-md">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter phone number" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <label className="whatsapp-optin mt-md">
                <input type="checkbox" checked={whatsappOptIn} onChange={e => setWhatsappOptIn(e.target.checked)} />
                <span>Send me updates on WhatsApp</span>
              </label>
            </div>
          )}
        </div>

        <div className="estimate-actions progressive-actions">
          {step > 1 ? (
            <button className="outline-btn" onClick={handleBack}>Back</button>
          ) : <div></div>}

          {step < 7 ? (
            <button 
              className="gold-btn" 
              onClick={handleNext}
              disabled={(step === 1 && !homeType) || (step === 2 && spaces.length === 0) || (step === 3 && !finishTier) || (step === 4 && !timeline) || (step === 5 && (!city || !locality))}
            >
              Next Step
            </button>
          ) : (
            <button 
              className="gold-btn" 
              onClick={submitForm}
              disabled={!name || phone.length < 7}
            >
              Calculate Estimate
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="calc-split-layout">
      <div className="calc-hero-image">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" alt="Beautiful interior design" />
      </div>
      <div className="calc-content-area">
        {renderContent()}
      </div>
    </div>
  );
}
