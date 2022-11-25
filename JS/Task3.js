let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  }
}

ladder.up();
ladder.up();
ladder.up();
ladder.showStep(); //3
ladder.down();
ladder.showStep(); //2
ladder.down();
ladder.showStep(); //1

