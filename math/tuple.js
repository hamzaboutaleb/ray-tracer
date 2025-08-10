import { equal } from "../utils/math";

class Tuple {
  constructor(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  /**
   * check for quality between to tuples
   * becuase equality for float numbers not always true we add error margin
   * @param {Tuple} other
   * @returns {Boolean}
   */
  equal(other) {
    return (
      equal(this.x, other.x) && equal(this.y, other.y) && equal(this.z, other.z)
    );
  }

  /**
   * add 2 tuples
   * we can't add 2 point becuase it doesnt make sense
   * adding 2 vec will give other vec
   * adding vec point will give point (it's like moving point with vec)
   * @param {Tuple} other
   * @returns {Vector | Point}
   */
  add(other) {
    return tuple(
      other.x + this.x,
      other.y + this.y,
      other.z + this.z,
      other.w + this.w
    );
  }

  /**
   * subtract 2 tuples
   * it make sense when we subtract vec-vec or point-point but not vec-point vice versa
   * @param {Tuple} other
   * @returns {Tuple}
   */
  sub(other) {
    return tuple(
      this.x - other.x,
      this.y - other.y,
      this.z - other.z,
      this.w - other.w
    );
  }

  /**
   * negate tuple
   * @returns {tuple}
   */
  negate() {
    return tuple(-this.x, -this.y, -this.z, this.w);
  }

  /**
   * scale tuple
   * @param {number} value
   * @returns {tuple}
   */
  scale(value) {
    return tuple(this.x * value, this.y * value, this.z * value, this.w);
  }

  /**
   * get magnitude of tuple
   * @returns {number}
   */
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  /**
   * get normalized version of tuple
   * @returns {Tuple}
   */
  norm() {
    const magnitude = this.mag();
    if (magnitude === 0) {
      throw new Error("Cannot normalize a zero vector");
    }
    return this.scale(1 / magnitude);
  }
}
export class Vector extends Tuple {
  constructor(x, y, z) {
    super(x, y, z, 0);
  }

  /**
   * get dot product with another vector
   * @param {Vector} other
   * @returns {number}
   */
  dot(other) {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }
}

export class Point extends Tuple {
  constructor(x, y, z) {
    super(x, y, z, 1);
  }
}

export function point(x, y, z) {
  return new Point(x, y, z);
}

export function vector(x, y, z) {
  return new Vector(x, y, z);
}

export function tuple(x, y, z, w) {
  if (w == 0) return vector(x, y, z);
  else if (w == 1) return point(x, y, z);
  throw new Error("Invalid tuple with w", w);
}
