import { readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const iconsDir = join(__dirname, '../src/assets/icons');
const imagesDir = join(__dirname, '../src/assets/images');

function toPascalCase(str) {
  return str
    .replace(/\.[^/.]+$/, '') // remove extension
    .replace(/(^\w|[-_]\w)/g, match =>
      match.replace(/[-_]/, '').toUpperCase()
    );
}

// ✅ SVGs as React components
function generateIconExports(dir) {
  const files = readdirSync(dir).filter(file => file.endsWith('.svg')).sort();
  const seen = new Set();
  const lines = [];

  for (const file of files) {
    const name = toPascalCase(file);
    if (seen.has(name)) {
      console.warn(`⚠️ Duplicate icon name: ${name}`);
      continue;
    }
    seen.add(name);
    lines.push(`export { ReactComponent as Icon${name} } from './${file}';`);
  }

  writeFileSync(join(dir, 'index.js'), lines.join('\n') + '\n');
  console.log('✅ icons/index.js (SVGR style) generated!');
}

// (Optional) for .png/.jpg
function generateImageExports(dir) {
  const files = readdirSync(dir).filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file)).sort();
  const seen = new Set();
  const lines = [];

  for (const file of files) {
    const name = toPascalCase(file);
    if (seen.has(name)) continue;
    seen.add(name);
    lines.push(`import ${name} from './${file}';\nexport const Image${name} = ${name};`);
  }

  writeFileSync(join(dir, 'index.js'), lines.join('\n\n') + '\n');
  console.log('✅ images/index.js generated!');
}

generateIconExports(iconsDir);
generateImageExports(imagesDir);
