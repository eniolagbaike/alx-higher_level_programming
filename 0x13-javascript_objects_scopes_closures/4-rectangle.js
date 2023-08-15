#!/usr/bin/node

module.exports = class Rectangle {
  constructor (w, h) {
    if (w && h > 0) [this.width, this.height] = [w, h];
  }

  print () {
    for (let row = 0; row < this.height; row++)console.log('X'.repeat(this.width, this.height));
  }

  rotate () {
    // switches width and height
    this.width += this.height;
    this.height = this.width - this.height;
    this.width -= this.height;
  }

  double () {
    // doubles width and height
    this.width *= 2;
    this.height *= 2;
  }
};
