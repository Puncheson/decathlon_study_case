import { TUser } from 'shared/api';

export const searchedUsers = (users:TUser[], query: string) => {
        return users?.filter(user => user.firstName.toLowerCase().includes(query.toLowerCase()) || user.lastName.toLowerCase().includes(query.toLowerCase()))
}