// Table: User 

export default {
    userSubscription: {
        subscribe: (root, args, { prisma }) => {
            return prisma.$subscribe.user(
                {
                    mutation_in: ["CREATED", "DELETED", "UPDATED"]
                }
            ).node();
        },

        //2.再解析數據
        resolve: payload => {
            return payload;
        }
    }
}