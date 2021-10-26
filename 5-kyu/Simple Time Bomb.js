/*
A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global property that holds the key to which wire to cut. Find that and then you can CutTheWire(wireKey);
*/

var wire;
const defaultObjectKeys = [
  'console', 'global', 'process', 'Buffer', 'clearImmediate', 'clearInterval',
  'clearTimeout', 'setImmediate', 'setInterval', 'setTimeout', '__filename',
  'exports', 'module', '__dirname', 'require'];

const currentObjectKeys = Object.keys(this);

for (let i = 0; i < currentObjectKeys.length; i++) {
  if (!defaultObjectKeys.includes(currentObjectKeys[i])) wire = currentObjectKeys[i];
}

CutTheWire(this[wire]);

// vers # 2
var wire = Object.keys(this)[15]; // Find the wire.
CutTheWire(this[wire]);