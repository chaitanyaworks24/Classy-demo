const fs = require('fs');

const servicesContent = fs.readFileSync('data/servicesDetailed.ts', 'utf8');
const originalProjectsContent = fs.readFileSync('data/projects.ts', 'utf8');

// We will construct the new projects array manually by string manipulation to avoid TS compilation issues in script
// But actually we can just evaluate the JS objects if we strip TS types.
// It's safer to just run a regex or replace. 
