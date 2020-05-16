"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Table: User 
var _default = {
  userSubscription: {
    subscribe: (root, args, {
      prisma
    }) => {
      return prisma.$subscribe.user({
        mutation_in: ["CREATED", "DELETED", "UPDATED"]
      }).node();
    },
    //2.再解析數據
    resolve: payload => {
      return payload;
    }
  }
};
exports.default = _default;