"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Table: User 
var _default = {
  createUseraaa: (root, args, {
    prisma
  }) => {
    console.log(args);
    return prisma.createUser(args);
  }
};
exports.default = _default;