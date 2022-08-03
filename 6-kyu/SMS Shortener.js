/*
SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.

Your task is to shorten the message to 160 characters, starting from end, by replacing spaces with camelCase, as much as necessary.

If all the spaces are replaced but the resulting message is still longer than 160 characters, just return that resulting message.

Example 1:

Original message (169 chars):

No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.
Shortened message (160 chars):

No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.
Example 2:

Original message (269 chars):

SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.
Shortened message (228 chars):

SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong.SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong.
*/

/*
const shortener = (msg) => {
  if (msg.length <= 160) return msg;
  const overflow = msg.length - 160;

  return msg.split(' ').slice(0, `-${overflow}`).join(' ') + msg.split(' ').slice(`-${overflow}`).map(v => v[0].toUpperCase() + v.slice(1)).join('');
}
*/

const shortener = (msg) => {
  msg = msg.split('');

  while (msg.length > 160 && msg.indexOf(' ') > -1) {
    const lsi = msg.lastIndexOf(' ');
    msg[lsi + 1] = msg[lsi + 1].toUpperCase();
    msg.splice(lsi, 1);
  }

  return msg.join('');
};
