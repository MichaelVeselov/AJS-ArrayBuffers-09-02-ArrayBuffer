export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const converterView = new Uint16Array(this.buffer);
    return String.fromCharCode(...converterView);
  }
}
