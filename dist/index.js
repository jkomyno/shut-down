'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

var _child_process = require('child_process');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Timeout in seconds after which the computer will be shut down
 * @param {Number} s = 0 
 */
var shutDown = function shutDown() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(resolve, reject) {
      var cmd;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cmd = '';

              if ((0, _os.platform)() === 'win32') {
                cmd = 'shutdown -s -t ' + s;
              } else {
                cmd = 'sleep ' + s + '; sudo shutdown -h now';
              }

              _context.prev = 2;

              console.log('cmd', cmd);
              _context.next = 6;
              return (0, _child_process.exec)(cmd);

            case 6:
              resolve();
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](2);

              reject(_context.t0);

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[2, 9]]);
    }));

    return function (_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports.default = shutDown;