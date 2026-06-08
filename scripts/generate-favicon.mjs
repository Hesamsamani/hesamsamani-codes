import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');
const logoPath = path.join(publicDir, 'images', 'logo.png');

const logo = fs.readFileSync(logoPath);
const b64 = logo.toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="8" fill="#050a14"/>
  <defs>
    <filter id="teal" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="0 0 0 0 0.18
                                           0 0 0 0 0.91
                                           0 0 0 0 0.78
                                           0 0 0 1 0"/>
    </filter>
  </defs>
  <image href="data:image/png;base64,${b64}" x="6" y="6" width="52" height="52" filter="url(#teal)"/>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svg);
fs.copyFileSync(logoPath, path.join(publicDir, 'favicon.png'));
fs.copyFileSync(logoPath, path.join(publicDir, 'apple-touch-icon.png'));

console.log('Generated favicon.svg, favicon.png, apple-touch-icon.png');