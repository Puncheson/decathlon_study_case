import { ProfileCard } from 'entities/User/ui/ProfileCard/ProfileCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser, TUserProfile } from 'shared/api';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UserProfile.module.scss'
import CircularProgress from '@mui/material/CircularProgress'

interface  IUserProfileProps {
    className?: string
}

export const UserProfile = ({ className } : IUserProfileProps) => {

    const [user, setUser] = useState<TUserProfile | undefined >()
    const [error, setError] = useState(false)
    let {userId} = useParams()

   
    useEffect(() => {
        getUser(userId).then(data => {
            if(data.id) {
                setUser(data)
            } else {
                setError(true)
            }
            
        })
    }, [])

    return (
    <div className={classNames(cls.UserProfile, {}, [className])}>
        {user ? <ProfileCard user={user}/> : error ? <div className={cls.error}>Oops error!Try again later</div> : <CircularProgress  sx={{margin: '60px auto'}}/>}
  
    </div>
    );
}
