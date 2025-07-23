export class Cow {
  id: string;
  hunger = 100;
  age = 0;

  constructor(id: string) {
    this.id = id;
  }

  tickMinute() {
    this.hunger -= 1;
  }

  tickHour() {
    // hourly stuff
  }

  tickDay() {
    this.age += 1;
  }
}
