// Table: User 

export default {
    createUseraaa: (root, args, { prisma }) => {
        console.log(args)
        return prisma.createUser(args)
    }
}