// // Table: Post 
// export default {
//     createCategory: (parent, { name, authorId }, { prisma }) => {
//         return prisma.createCategory({
//             name,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             },
//             posts: {
//                 create: [
//                     {
//                         title: "测试0001",
//                         content: "哈哈哈哈哈你好呀",
//                         author: {
//                             connect: {
//                                 id: authorId
//                             }
//                         }
//                     }, {
//                         title: "测试0003333",
//                         content: "哈哈哈哈哈你好呀22222",
//                         author: {
//                             connect: {
//                                 id: authorId
//                             }
//                         }
//                     },
//                 ]
//             }
//         })
//     },
//     updateCategory: (parent, { authorId, name, id }, { prisma }) => {
//         const data = {
//             //要更新的數據
//             name
//         }
//         if (authorId) {//如果有傳authorId在更新它
//             data.author = {
//                 connect: { id: authorId }
//             }
//         }
//         return prisma.updateCategory({
//             where: { id },
//             data
//         })
//     },
//     deleteCategory: (parent, { id }, { prisma }) => {
//         return prisma.deleteCategory({ id })
//     },
//     createPost: (parent, { title, content, authorId, categoryIds }, { prisma }) => {
//         return prisma.createPost({
//             title,
//             content,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             },
//             categories:
//             {
//                 connect:
//                     categoryIds.map((item) => {
//                         return { id: item }
//                     })
//             }
//         })
//     }
// }
"use strict";