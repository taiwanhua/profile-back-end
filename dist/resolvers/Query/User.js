"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Table: User 
var _default = {
  users: (root, {
    first
  }, {
    prisma
  }) => {
    return prisma.users({
      first,
      where: {
        phone_not: "nullsdf"
      }
    });
  },
  user: async (root, {
    id,
    name
  }, {
    prisma
  }) => {
    const s = await prisma.user({
      name
    });
    console.log("---------");
    console.log(s);
    return s;
  }
};
exports.default = _default;