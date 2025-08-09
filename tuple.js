class Tuple  {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
}

export class Vector extends Tuple {
    constructor(x, y, z) {
        super(x, y, z, 0);
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
    return new Vector(x, y, z)
}