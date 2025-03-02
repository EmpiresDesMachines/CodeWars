/*
You are tasked with protecting an important application against hackers.

The first defense you have to implement is brute force protection.

Some inexperienced (or lazy) hackers may try to break in by simply guessing the admin password over and over again.

Design a function which will block a login attempt if it comes from an IP address which failed to login 20 times in a row.

The function will receive a single parameter - an object containing two properties:

loginAttempt.sourceIP // the IP of the person trying to log in
loginAttempt.successful // whether the log-in attempt succeeded
The bruteForceDetected function should return true when the IP should be blocked and false otherwise.

Note: A successful login should reset the number of counts.
*/

const data = {};
function bruteForceDetected(loginRequest) {
  const { sourceIP: ip, successful: succ } = loginRequest;

  data[ip] = data[ip] || 0;

  if (!succ) data[ip] += 1;
  if (data[ip] > 19) return true;

  if (succ) data[ip] = 0;

  return false;
}
