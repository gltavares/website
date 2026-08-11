// One-off generator for subtle, dialled-down placeholder artwork used in the
// bento grid. Replace the files in /public/work/ with real project imagery.
import { mkdirSync, writeFileSync } from 'node:fs';

const out = new URL('../public/work/', import.meta.url);
mkdirSync(out, { recursive: true });

const items = [
  { name: 'car-rental', a: '#e7efe9', b: '#cfe0d4', ink: '#2f5c46' },
  { name: 'scannable', a: '#e9eef7', b: '#d3dff2', ink: '#2f4c7a' },
  { name: 'design-systems', a: '#f0ece7', b: '#e2d8cd', ink: '#6b5a45' },
  { name: 'callcenter', a: '#efe9ef', b: '#e0d2e2', ink: '#5c3f5f' },
  { name: 'destrava', a: '#e8efef', b: '#d0e2e2', ink: '#2f5c5c' },
  { name: 'design-ops', a: '#efeae6', b: '#e6d9cf', ink: '#6b4f3a' },
  { name: 'principles', a: '#eceef0', b: '#d8dde2', ink: '#3b4652' },
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
