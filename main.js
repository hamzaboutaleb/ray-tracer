import { Color, point, Vector } from "./math/tuple.js";
import Canvas from "./canvas.js";
import Matrix from "./math/matrix.js";

const matrix = new Matrix(4, 4);

matrix.data = [
  [1, 2, 3, 4],
  [2, 4, 4, 2],
  [8, 6, 4, 1],
  [0, 0, 0, 1],
];

console.log("transpose", matrix.transpose());
const vec = new point(1, 2, 3);

const result = matrix.multiplyVec(vec);
console.log(result);
