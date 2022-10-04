import { TPost } from 'shared/api';

export const searchedPosts = (posts:TPost[], query: string) => {
        return posts.filter(post => post.owner.firstName.toLowerCase().includes(query.toLowerCase()) || post.owner.lastName.toLowerCase().includes(query.toLowerCase()))
}