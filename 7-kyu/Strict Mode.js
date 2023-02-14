/*
Write a function that returns whether it is running in strict mode.
*/

// #1
function isInStrictMode() {
  try {
    delete Function.prototype;
  } catch {
    return true;
  }

  return false;
}

// #2
function isInStrictMode() {
  return !this;
}
