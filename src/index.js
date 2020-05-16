import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import resolvers from './resolvers'

const server = new GraphQLServer(
    {
        //構建配置
        //schema 定義的API
        typeDefs: "./src/schema.graphql"
        ,
        //解析器
        resolvers
        ,
        context: { prisma }
    }
)

server.start({
    port: 4600 //schema.graphql的 port，預設4000
}, ({ port }) => {
    console.log(`啟動在 ${port}`);
    console.log("PRISMA", process.env.PRISMA_ENDPOINT)
})