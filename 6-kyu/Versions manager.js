/*
In this kata we are going to mimic a software versioning system.

You have to implement a vm function returning an object.

It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

This class should support the following methods, all of which should be chainable (except release):

major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to. Multiple calls to rollback() should be possible and restore the version history
release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
May the binary force be with you!
*/

const vm = function (vers) {
  const version = (vers || "0.0.1").split(".").slice(0, 3).map(Number);

  if (isNaN(version.join(""))) {
    throw new Error("Error occured while parsing version!");
  }

  const [maj, min = 0, pat = 0] = version;

  return {
    maj,
    min,
    pat,
    history: [],
    _saveHistory() {
      this.history.push([this.maj, this.min, this.pat]);
    },
    release() {
      return [this.maj, this.min, this.pat].join(".");
    },
    major() {
      this._saveHistory();
      this.maj++;
      this.min = 0;
      this.pat = 0;
      return this;
    },
    minor() {
      this._saveHistory();
      this.min++;
      this.pat = 0;
      return this;
    },
    patch() {
      this._saveHistory();
      this.pat++;
      return this;
    },
    rollback() {
      if (!this.history.length) throw new Error("Cannot rollback!");
      [this.maj, this.min, this.pat] = this.history.pop();
      return this;
    },
  };
};
