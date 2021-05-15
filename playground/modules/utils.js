// Scope to the module.  Calling the
// variable in the module it exports to won't work, but calling the variable in the function you
// export to another module will carry that variable with you to the other module
// const last = 'bos';

// Alternatively you can directly export the variable for import elsewhere
// export const last = 'bos';

const last = 'bos';
const middle = 'slam dunk';

// Export functions for import in other files (modules)
export function returnHi(name) {
  return `Hi ${name} ${last}`;
}

const first = 'ian';

// Alternatively can export explicitly at the end
// NAMED Exports
export { last, middle };
// DEFAULT Export
export default first;
