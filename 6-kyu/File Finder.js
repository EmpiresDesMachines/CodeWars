/*
Sometimes some annoying students decide to mess around by creating horrible amalgamations of nested folders in shared directories. Sometimes they'll even stick a file in there as a sort of tedious file explorer "treasure hunt". In this kata, you'll have to search through a virtual filesystem of sorts to find a file, then return the path to the file. For example:

let files = {
  'New folder': {
    'New folder': {}
  },
  'New folder (1)': {
    'New folder': {
      'funnyjoke.txt': 'lol i pranked you!!!'
    }
  },
  'New folder (2)': {}
};
console.log(search(files)); // New folder (1)/New folder/funnyjoke.txt
Sometimes there might not be a file in the filesystem. In that case, just throw an error. You're always guaranteed to receive a filesystem with either one or zero files.

Good luck!
*/

function search(files) {
  let res = '';

  function find(files, path = '') {
    for (const key in files) {
      if (typeof files[key] === 'string') {
        res = path + key;
      } else {
        find(files[key], path + key + '/');
      }
    }
  }

  find(files);
  if (!res) throw new Error('No files!');

  return res;
}
