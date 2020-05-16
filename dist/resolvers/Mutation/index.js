"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("./User"));

var _Post = _interopRequireDefault(require("./Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//次轉發Mutation解析器
var _default = { ..._User.default,
  ..._Post.default
};
exports.default = _default;