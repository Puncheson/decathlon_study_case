import { TPost } from 'shared/api';

export  const searchedPostsFunc = (posts:TPost[], query: string): TPost[] => {
        return posts.filter(post => post.owner.firstName.toLowerCase().includes(query.toLowerCase()) || post.owner.lastName.toLowerCase().includes(query.toLowerCase())  || post.text.toLowerCase().includes(query.toLowerCase()) || post.tags.some(elem => {
               return elem.toLowerCase().includes(query.toLowerCase())
        }))
}