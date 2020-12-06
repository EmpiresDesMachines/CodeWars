/*
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness
*/

function nextId(ids) {
  ids.sort((a, b) => a - b);

  const arr = ids.filter((el, i) => ids.indexOf(el) === i);

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(0) === -1) return 0;
    if (arr[i] + 1 !== arr[i + 1]) return arr[i] + 1;
  }
}