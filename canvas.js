import { Color } from "./math/tuple.js";

export default class Canvas {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.context = this.createContext();
  }

  createContext() {
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    return canvas.getContext("2d");
  }

  setPixel(x, y, color) {
    this.context.fillStyle = color.toString();
    this.context.fillRect(x, y, 1, 1);
  }

  pixelAt(x, y) {
    const imageData = this.context.getImageData(x, y, 1, 1);
    const [r, g, b, a] = imageData.data;
    return new Color(r / 255, g / 255, b / 255, a);
  }

  getImage() {
    return this.context.getImageData(0, 0, this.width, this.height);
  }
}
