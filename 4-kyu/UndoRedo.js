/*
The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

set(key, value) Assigns the value to the key. If the key does not exist, creates it.

get(key) Returns the value associated to the key.

del(key) removes the key from the object.

undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After set() or del() are called, there is nothing to redo.

All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

Any set/del after an undo should disallow new redos.
*/

function undoRedo(object) {
  let actions = [];
  let undoActions = [];
  return {
    set: function (key, value) {
      actions.push(["set", key, value, object[key]]);
      object[key] = value;
      undoActions = [];
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      actions.push(["del", key, object[key]]);
      delete object[key];
      undoActions = [];
    },
    undo: function () {
      if (!actions.length) throw new Error("no actions were found");
      const [type, key, value, prevValue] = actions.pop();
      if (type === "set" && !prevValue) {
        delete object[key];
      }
      if (type === "set" && prevValue) {
        object[key] = prevValue;
      }
      if (type === "del") {
        object[key] = value;
      }

      undoActions.push([type, key, value]);
    },
    redo: function () {
      if (!undoActions.length) throw new Error("no undo actions were found");
      const [type, key, value] = undoActions.pop();
      if (type === "set") {
        object[key] = value;
      }
      if (type === "del") {
        delete object[key];
      }

      actions.push([type, key, value]);
    },
  };
}
