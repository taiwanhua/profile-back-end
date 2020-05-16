"use strict";

var _graphqlYoga = require("graphql-yoga");

var _prismaClient = require("./generated/prisma-client");

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = new _graphqlYoga.GraphQLServer({
  //構建配置
  //schema 定義的API
  typeDefs: "./src/schema.graphql",
  //解析器
  resolvers: _resolvers.default,
  context: {
    prisma: _prismaClient.prisma
  }
});
server.start({//port: 4600 //schema.graphql的 port，預設4000
}, ({
  port
}) => {
  console.log(`啟動在 ${port}`);
  console.log("PRISMA", process.env.PRISMA_ENDPOINT);
});