import { Vector } from "./tuple.js";

export default class Matrix {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.data = new Array(row).fill(0).map(() => new Array(col).fill(0));
  }

  static identity(size) {
    const result = new Matrix(size, size);
    for (let i = 0; i < size; i++) {
      result.data[i][i] = 1;
    }
    return result;
  }

  transpose() {
    const result = new Matrix(this.col, this.row);
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        result.data[j][i] = this.data[i][j];
      }
    }
    return result;
  }

  multiply(other) {
    if (this.col !== other.row)
      throw new Error("Incompatible matrix dimensions");
    const result = new Matrix(this.row, other.col);
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < other.col; j++) {
        for (let k = 0; k < this.col; k++) {
          result.data[i][j] += this.data[i][k] * other.data[k][j];
        }
      }
    }
    return result;
  }

  multiplyVec(vec) {
    if (this.col != vec.length)
      throw new Error("Incompatible dimensions for vector multiplication");
    let result = new Vector(0, 0, 0);
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        console.log(i, j, result.get(i), this.data[i][j], vec.get(j));
        result.set(i, result.get(i) + this.data[i][j] * vec.get(j));
      }
    }
    return result;
  }

  equals(other) {
    if (this.row !== other.row || this.col !== other.col) return false;
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        if (this.data[i][j] !== other.data[i][j]) return false;
      }
    }
    return true;
  }
}
