import path from 'path';

var sum = function (a, b) {
    return a + b;
};
var minus = function (a, b) {
    return a - b;
};
var getPath = function () {
    return path.resolve(__dirname, 'src');
};

export { getPath, minus, sum };

if(typeof window !== 'undefined') {
  window._Vino_VERSION_ = '1.0.0'
}
