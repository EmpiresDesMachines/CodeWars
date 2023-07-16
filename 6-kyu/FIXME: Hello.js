/*
The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. Furthermore, it is supposed to say them in the same order they were set.

But it's not working properly.

Notes
There are 3 attributes

name
age
sex ('M' or 'F')
When the same attribute is assigned multiple times the hello method shows it only once. If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.

Examples
Hello.
Hello. My name is Bob. I am 27. I am male.
Hello. I am 27. I am male. My name is Bob.
Hello. My name is Alice. I am female.
Hello. My name is Batman.
Task
Fix the code so we can all go home early.
*/

class Dinglemouse {
  constructor() {
    this.name = this.age = this.sex = 0;
    this.res = [];
  }

  setAge(age) {
    if (!this.age) {
      this.res.push("age");
    }
    this.age = age;
    return this;
  }

  setSex(sex) {
    if (!this.sex) {
      this.res.push("sex");
    }
    this.sex = sex;
    return this;
  }

  setName(name) {
    if (!this.name) {
      this.res.push("name");
    }
    this.name = name;
    return this;
  }

  hello() {
    return (
      "Hello." +
      this.res
        .map((v) =>
          v === "age"
            ? ` I am ${this.age}.`
            : v === "sex"
              ? ` I am ${this.sex == "M" ? "male" : "female"}.`
              : ` My name is ${this.name}.`,
        )
        .join("")
    );
  }
}
