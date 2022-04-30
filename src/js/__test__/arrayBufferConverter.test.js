import getBuffer from '../getBuffer.js';
import ArrayBufferConverter from '../arrayBufferConverter.js';

describe('Array Buffer Converter should:', () => {
  test('have method toString() to return correct string', () => {
    const arrayBufferConverter = new ArrayBufferConverter();
    const buffer = getBuffer();
    arrayBufferConverter.load(buffer);
    const result = arrayBufferConverter.toString();
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(result).toEqual(expected);
  });
});
