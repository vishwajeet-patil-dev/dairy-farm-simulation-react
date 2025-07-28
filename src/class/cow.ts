export class Cow {
  constructor(public name: string, public age: number = 1) {}
  get cowName() {
    return this.name;
  }
  get cowAge() {
    return this.age;
  }
  incrementAge() {
    this.age += 1;
  }
}
