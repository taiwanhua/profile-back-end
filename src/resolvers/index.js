//轉發解析器項目
import Query from './Query';
import Mutation from './Mutation';
import Subscription from './Subscription';

export default {
    Query,
    Mutation,
    Subscription,

    //Category關聯的資料表解析器
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