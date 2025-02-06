import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const source = join(__dirname, 'src', 'styles.css');
const destination = join(__dirname, 'dist', 'styles.css');

fs.copyFile(source, destination, (err) => {
  if (err) {
    console.error('Error copying the file:', err);
  } else {
    console.log('File copied successfully.');
  }
});
