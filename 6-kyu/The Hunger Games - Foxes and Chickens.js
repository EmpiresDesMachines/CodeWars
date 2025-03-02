/*
Story
Old MacDingle had a farm.

To be more precise, he had a free-range chicken farm.

But Old MacDingle also had a fox problem.

Foxes F eat chickens C

At night the only guaranteed "safe" chickens are in their cages [] (unless a fox has got into the cage with them!)

Kata Task
Given the initial configuration of foxes and chickens what will the farm look like the next morning after the hungry foxes have been feasting?

Examples
Ex1	Before
CCC[CCC]FCC[CCCCC]CFFFF[CCC]FFFF
After
...[CCC]F..[CCCCC].FFFF[CCC]FFFF
Ex2	Before
...[CCC]...[CCCFC].....[CCC]....
After
...[CCC]...[...F.].....[CCC]....
Ex3	Before
CCC[CCC]FCC[CCCFC]CFFFF[CCC]FFFF
After
...[CCC]F..[...F.].FFFF[CCC]FFFF
Notes
Anything not a fox, a chicken, or a cage is just dirt .
All cages are intact (not open-ended), and there are no cages inside other cages
*/

var hungryFoxes = function (farm) {
  const chunks = farm.split(/(\[.*?\])/);
  const isFoxOutside = chunks
    .filter((v) => v[0] !== "[")
    .some((v) => v.indexOf("F") > -1);
  const res = [];

  for (let i = 0; i < chunks.length; i++) {
    if (chunks[i][0] === "[") {
      const isFoxInside = chunks[i].indexOf("F") > -1;
      res.push(isFoxInside ? chunks[i].replace(/C/g, ".") : chunks[i]);
    } else {
      res.push(isFoxOutside ? chunks[i].replace(/C/g, ".") : chunks[i]);
    }
  }

  return res.join("");
};
