/*
A system is receiving each hour a batch with logon information.
Can you write a method that can update accounts with the latest logon data?

Task
Finish this function:

function updateAccounts(accounts, logons) {}
The function accepts "Accounts" and returns the same list updated. The list of accounts is a JSON object:

var accounts = {
  "Accounts": [
    {
      "Id": 21,
      "Name": "John Shepherd",
      "LogonCount" : 13,
      "LastLogon" : new Date(2017, 1, 14, 16, 15, 6, 111)
    },
    {
      // ...
    }
  ]
}
The function accepts a list of "Logons" that is a JSON object:

var logons = {
  "Logons": [
    {
      "Id": 21,
      "Name": "John Shepherd",
      "Date" : new Date(2017, 1, 14, 16, 15, 6, 111)
    },
    {
      // ...
    }
  ]
}
The updates must follow this pattern:

Accounts are matched with the logon information by the "Id" fields.
If an account matches a logon, The "LogonCount" is incremented with 1.
If "Id" is not found, a new account will be added with all available information where "LogonCount" is set to 1.
If "LastLogon" is older than the logon "Date" it will be set to the logon "Date".
If "LastLogon" is older than the logon "Date" the "Name" will be set to the logon "Name" when not empty.
Accounts are returned ordered by "Id" ascending, but they are not necessarily ordered when they are passed as a parameter.
*/

function updateAccounts(accounts, logons) {
  const users = accounts.Accounts || [];
  const log = (logons.Logons || []).sort((a, b) => a.Date - b.Date);

  return {
    Accounts: log
      .reduce((acc, v) => {
        const logId = v.Id;
        const isAccount = acc.map((v) => v.Id).indexOf(logId);
        if (isAccount > -1) {
          const old = acc.find((v) => v.Id === logId);
          old.LogonCount += 1;
          if (old.LastLogon < v.Date) {
            old.LastLogon = v.Date;
            old.Name = v.Name || old.Name;
          }
          return acc;
        } else {
          v.LastLogon = v.Date;
          delete v.Date;
          v = { ...v, LogonCount: 1 };
          return [...users, v];
        }
      }, users)
      .sort((a, b) => a.Id - b.Id),
  };
}
