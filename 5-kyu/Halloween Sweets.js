/*
It's Halloween and you're playing "trick or treat". After some hours of collecting delicious sweets, you get faced your personal challenge of the day: A house resident presents you 9 bags of sweets and you may pick one of them. You already want to grab one of those, but then he says: "If you're lucky, you get the one with an extra lollipop". "An extra lollipop?" you ask. The old man says "Yes, I spread all the sweets equally over all the bags. At the end one lollipop was over, so I put it randomly into one of those bags. But I don't know, which of those bags it was, since they look all the same". You know you love lollipops, so you're thinking about how to find out, in which bag the additional lollipop could be. "OK", the old man says, "I have an idea: Here is a pair of scales. You can put as many bags as you want onto those scale pans. You may weigh them two times at most. After that you have to decide for one of those bags.". Can you find the bag, which contains the extra lollipop?

Rules:

Implement a function pick(), which gets passed an array, containing the 9 bags. The function must return the one bag, you would pick in order to get the additional lollipop.
You also get access to the scale (2nd parameter), which provides the weigh() function. It accepts two parameters:
an array containing all bags, you want to put onto the left scale pan
an array containing all bags, you want to put onto the right scale pan
Of course both arrays must contain different bags and you may only call the function two times at most.
8 of 9 bags can be considered to have exactly the same weight, only the one with the extra lollipop weighs slightly more
The result of the weigh() function can be:
-1, if there's more weight on the left pan
1, if there's more weight on the right pan
0, if there's the same weight on both pans
Alright, it's getting serious now. Get your lollipop!
*/

function pick(bags, scale) {
  const first = scale.weigh(bags.slice(0, 3), bags.slice(3, 6));
  let res;

  if (first === -1) {
    const sec = scale.weigh([bags[0]], [bags[1]]);
    res = !sec ? bags[2] : sec === 1 ? bags[1] : bags[0];
  }

  if (first === 1) {
    const sec = scale.weigh([bags[3]], [bags[4]]);
    res = !sec ? bags[5] : sec === 1 ? bags[4] : bags[3];
  }

  if (!first) {
    const sec = scale.weigh([bags[6]], [bags[7]]);
    res = !sec ? bags[8] : sec === 1 ? bags[7] : bags[6];
  }

  return res;
}
