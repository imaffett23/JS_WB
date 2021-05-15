import { isValidColor } from './colors.js';

export function logWords(results) {
  console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;

  // Lowercase Everything
  let color = words.toLowerCase();

  // Strip any spaces out
  color = color.replace(/\s/g, '');

  // Check if it is a valid color
  if (!isValidColor(color)) return;

  // If it is, then show the UI for that
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
  console.log(colorSpan);
  console.log('This is a valid color');
  console.log(color);

  // Change the background color
  document.body.style.backgroundColor = color;
}
