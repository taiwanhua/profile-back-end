"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireDefault(require("./Query"));

var _Mutation = _interopRequireDefault(require("./Mutation"));

var _Subscription = _interopRequireDefault(require("./Subscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//轉發解析器項目
var _default = {
  Query: _Query.default,
  Mutation: _Mutation.default,
  Subscription: _Subscription.default //Category關聯的資料表解析器
  // Category: {
  //     author: (parent, args, { prisma }) => {
  //         return prisma.category({ id: parent.id }).author();
  //     },
  //     posts: (parent, args, { prisma }) => {
  //         return prisma.category({ id: parent.id }).posts();
  //     }
  // },
  // Post: {
  //     author: (parent, args, { prisma }) => {
  //         return prisma.post({ id: parent.id }).author();
  //     },
  //     categories: (parent, args, { prisma }) => {
  //         return prisma.post({ id: parent.id }).categories();
  //     }
  // },
  // User:{
  //     categories: (parent, args, { prisma }) => {
  //         return prisma.user({ id: parent.id }).categories();
  //     },
  //     posts: (parent, args, { prisma }) => {
  //         return prisma.user({ id: parent.id }).posts();
  //     }
  // }

};
exports.default = _default;