/*
Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

Example:

sort([1,3,2]) // should return [1,2,3]

*/

function sort(items) {
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] > items[j]) {
        [items[i], items[j]] = [items[j], items[i]];
      }
    }
  }

  return items;
}