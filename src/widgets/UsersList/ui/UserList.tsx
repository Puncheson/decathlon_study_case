import { TableCard } from 'entities/User';
import {  useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';


import cls from './UserList.module.scss'
import TextField from '@mui/material/TextField'
import useInput from 'shared/lib/useInput/useInput';
import { AppPagination } from 'shared/ui/AppPagination/AppPagination';
import { useGetUsers } from 'shared/lib';
import { notifications } from '../lib/notifications';


interface  IUserListProps {
    className?: string
}
export const UserList = ({ className } : IUserListProps) => {
    
    const [pagination,setPagination] = useState({
        pageNumber: 1,
        limit: 10,
        totalPages: 1,
    })

    const inputValue = useInput('')

    const {users, loading, error} = useGetUsers(
        pagination, 
        (limit, total) => {
            setPagination({
                pageNumber: pagination.pageNumber,
                totalPages: Math.floor(total / limit),
                limit: limit
            })
        },
        pagination.pageNumber, inputValue.value)

       
        const setNotification = () => {
            if(inputValue.value.length) {
                return notifications.queryEmpty
            } else if (loading) {
                return notifications.search
            } else if (error) {
                return notifications.error
            } else {
                return notifications.empty
            }
        }
    
return (
    <>
    <TextField  {...inputValue}  color='warning' sx={{width: '100%', margin: '15px 0' }} id="outlined-basic" label="Search loaded users" variant="outlined" />
        <div 
        className={classNames(cls.UserList, {}, [className])}>
       {
       users?.length ? 
       users.map(user=> {
        return <TableCard key={user.id} user={user}/>
       }) : <div>{setNotification()}</div>
} 
    </div>

    <AppPagination 
        onChange={(_e,page)=> { 
            setPagination({...pagination,pageNumber: page})
            }} 
        paginationConfig={pagination}
    />

    </>
);
}