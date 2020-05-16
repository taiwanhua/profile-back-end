//次轉發Mutation解析器

import User from './User'
import Post from './Post'

export default {
    ...User,
    ...Post
}