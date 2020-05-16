// Table: User 

export default {
    users: (root, { first }, { prisma }) => {
        return prisma.users({
            first,
            where: {
                phone_not: "nullsdf"
            }
        })
    },

    user: async (root, { id, name }, { prisma }) => {
        const s = await prisma.user({ 
            name
         })
         console.log("---------")
        console.log(s)
        return s
    }
}