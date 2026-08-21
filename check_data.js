import fs from 'fs';
import data from './src/data/pages.json' with { type: "json" };
console.log([...new Set(data.PAGES.map(p => p.location))].slice(0, 10));
console.log([...new Set(data.PAGES.map(p => p.feature))].slice(0, 10));
