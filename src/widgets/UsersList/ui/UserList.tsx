import { TableCard } from 'entities/User';
import { useEffect, useRef, useState } from 'react';
import { getUsers, TUser } from 'shared/api';
import { classNames } from 'shared/lib/classNames/classNames';


import cls from './UserList.module.scss'
import TextField from '@mui/material/TextField'
import Pagination from '@mui/material/Pagination'
import useInput from 'shared/lib/useInput/useInput';
import { searchedUsers } from 'features/lib/searchedUsers/searchedUsers';


interface  IUserListProps {
    className?: string
}
export const UserList = ({ className } : IUserListProps) => {

    const [isUsersLoading, setUsersLoading] = useState(false)
    const [users, setUsers] = useState<TUser[]>([])
    const [isError, setIsError] = useState(false)
    
    const [pagination,setPagination] = useState({
        pageNumber: 1,
        limit: 10,
        totalPages: 1,
    })

    const inputValue = useInput('')

    const handleGetUsers = () => {
        setUsersLoading(true)
        getUsers({page: pagination.pageNumber, limit: pagination.limit}).then(res => {
            if(res?.data) {
                setUsers(res.data)
                setPagination({
                    pageNumber: pagination.pageNumber,
                    totalPages: Math.floor(res.total / res.limit),
                    limit: res.limit
                })
                setUsersLoading(false)
            } else {
                setIsError(true)
            setUsersLoading(false)
            }
            
        })
    }

    useEffect(() => {
        handleGetUsers()
    }, [pagination.pageNumber])
    
return (
    <>
    <TextField  {...inputValue}  color='warning' sx={{width: '100%', margin: '15px' }} id="outlined-basic" label="Search loaded users" variant="outlined" />
        <div 
        className={classNames(cls.UserList, {}, [className])}>
       {
       searchedUsers(users, inputValue.value)?.length ? 
       searchedUsers(users, inputValue.value).map(user=> {
        return <TableCard key={user.id} user={user}/>
       }) : 
       inputValue.value.length ? 
       <div className={cls.notification}>There is no users found with this query. You can try to find user on another page!</div>  : 
       isUsersLoading  ? 
       <div className={cls.notification}>Looking for users...</div> : isError ? <div className={cls.notification}>Oops! Error! Please try again later.</div> 
       : <div className={cls.notification}>No users found</div>} 
    </div>

    
    <div className={cls.pagination}>
        {(pagination.totalPages > 1) && <Pagination  
         page={pagination.pageNumber} 
         onChange={(_e,page)=> { 
            setPagination({...pagination,pageNumber: page})
            }} sx={{ margin: '15px' }} 
        count={pagination.totalPages} />}
    </div>
    </>
);
}