import { build } from 'esbuild';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

mkdirSync('.build', { recursive: true });
const templates = [];
for (const file of readdirSync('src/views')) {
  const name = file.replace('.tsx', '');
  const output = '.build/' + name + '.mjs';
  await build({ entryPoints: ['src/views/' + file], outfile: output, bundle: true, jsx: 'automatic', format: 'esm', packages: 'external' });
  const { default: View } = await import('../' + output);
  templates.push('<template id="' + name + '">' + renderToStaticMarkup(createElement(View)).replace(/<link[^>]*>/g,'') + '</template>');
}
execFileSync('node_modules/.bin/tailwindcss', ['-i','src/styles.css','-o','.build/styles.css','--minify']);
const shell = readFileSync('src/shell.html','utf8');
writeFileSync('index.html',shell.replace('<!--TEMPLATES-->',()=>templates.join('\n')).replace('/*STYLES*/',()=>readFileSync('.build/styles.css','utf8')).replace('/*APP*/',()=>readFileSync('src/app.js','utf8')));
