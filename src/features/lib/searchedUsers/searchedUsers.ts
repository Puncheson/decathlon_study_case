import { TUser } from 'shared/api';

export const searchedUsers = (posts:TUser[], query: string) => {
        return posts.filter(user => user.firstName.toLowerCase().includes(query.toLowerCase()) || user.lastName.toLowerCase().includes(query.toLowerCase()))
}