/*class*/
class PointClass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance(other) {
    const dx = Math.abs(this.x - other.x);
    const dy = Math.abs(this.y - other.y);
    return dx + dy;
  }
}
/* function */
function PointFunc(x, y) {
  this.x = x;
  this.y = y;
}
PointFunc.prototype.distance = function (other) {
  var dx = Math.abs(this.x - other.x);
  var dy = Math.abs(this.y - other.y);
  return dx + dy;
}

function testClass() {
  const points = [
    new PointClass(10, 10),
    new PointClass(1, 1),
    new PointClass(8, 9)
  ];
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    for (const point1 of points) {
      for (const point2 of points) {
        result += point1.distance(point2);
      }
    }
  }
  return result;
}
function testFunc() {
  const points = [
    new PointFunc(10, 10),
    new PointFunc(1, 1),
    new PointFunc(8, 9)
  ];
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    for (const point1 of points) {
      for (const point2 of points) {
        result += point1.distance(point2);
      }
    }
  }
  return result;
}

for (let i = 0; i < 5; i++) {
  console.time('testClass ' + i);
  testClass();
  console.timeEnd('testClass ' + i);
}
for (let i = 0; i < 5; i++) {
  console.time('testFunc ' + i);
  testFunc();
  console.timeEnd('testFunc ' + i);
}
