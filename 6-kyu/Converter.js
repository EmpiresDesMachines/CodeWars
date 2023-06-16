/*
Your friend have an issue with converting file sizes between B, KB, MB, GB and TB. Could you create converter that will help him?

Create class Converter that will have:

Properties:

number that represent size amount (not necessarily integer).
string that represent current unit type. Unit type can be only one of the next: 'B', 'KB', 'MB', 'GB', 'TB'
Methods:

unit: return current unit type;
size: return current size and unit as a string '19 MB' or '38.45 GB' or '7.5 TB'
toB: convert size to Bytes and unit to 'B'
toKB: convert size to Kilobytes and unit to 'KB'
toMB: convert size to Megabyte and unit to 'MB'
toGB: convert size to Gigabyte and unit to 'GB'
toTB: convert size to Terabyte and unit to 'TB'
Note, that there can be maximum 3 digits after decimal and a number should be rounded to lower digit (floor)

Example:
var file = new Converter(1, "TB");

file.toMB();

file.unit; // 'MB'
file.size; // '1048576 MB'
*/

class Converter {
  constructor(size, unit) {
    this.units = ["B", "KB", "MB", "GB", "TB"];
    this.size = size + unit;
    this.unit = unit;

    this.units.forEach((v) => {
      this["to" + v] = () => {
        const diff = this.calcDiff(v);
        this.unit = v;
        this.size =
          Math.floor(+this.size.replace(/[a-z]/gi, "") * 1024 ** diff * 1000) /
            1000 +
          " " +
          v;
      };
    });
  }

  calcDiff(val) {
    return this.units.indexOf(this.unit) - this.units.indexOf(val);
  }
}
