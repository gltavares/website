// One-off generator for subtle, dialled-down placeholder artwork used in the
// bento grid. Replace the files in /public/work/ with real project imagery.
import { mkdirSync, writeFileSync } from 'node:fs';

const out = new URL('../public/work/', import.meta.url);
mkdirSync(out, { recursive: true });

// Saturated duotone gradients for the project artwork.
const items = [
  { name: 'car-rental', a: '#1f9d63', b: '#8ff0bd', ink: '#0c3d26' },
  { name: 'scannable', a: '#2f5fe0', b: '#8fb3ff', ink: '#122a63' },
  { name: 'design-systems', a: '#e0842a', b: '#ffcf8f', ink: '#5c3a12' },
  { name: 'callcenter', a: '#8b39c4', b: '#d3a6ef', ink: '#3d1660' },
  { name: 'destrava', a: '#1aa3a3', b: '#8ff0f0', ink: '#0c3d3d' },
  { name: 'design-ops', a: '#e0532a', b: '#ffab8f', ink: '#5c1c0c' },
  { name: 'principles', a: '#2f7fb0', b: '#8fd0f0', ink: '#123a5c' },
];

const svg = ({ a, b, ink }) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#g)"/>
  <g opacity="0.35" stroke="${ink}" stroke-width="6" fill="none">
    <rect x="360" y="180" width="480" height="640" rx="46"/>
    <line x1="420" y1="300" x2="780" y2="300"/>
    <line x1="420" y1="360" x2="700" y2="360"/>
    <rect x="420" y="440" width="360" height="180" rx="20"/>
    <line x1="420" y1="680" x2="780" y2="680"/>
    <line x1="420" y1="730" x2="640" y2="730"/>
  </g>
</svg>
`;

for (const item of items) {
  writeFileSync(new URL(`${item.name}.svg`, out), svg(item));
}

console.log(`Wrote ${items.length} placeholder SVGs to public/work/`);
