// Only import js on event (better for memory and performance!)
export async function handleButtonClick(event) {
  // Can also destructure parts of the module
  const { localCurrency, default: currency } = await import('./currencies.js');
  console.log(localCurrency, currency);
}
