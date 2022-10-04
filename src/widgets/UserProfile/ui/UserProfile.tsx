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

    let {userId} = useParams()

   
    useEffect(() => {
        getUser(userId).then(data => {
            setUser(data)
        })
    }, [])

    return (
    <div className={classNames(cls.UserProfile, {}, [className])}>
        {user ? <ProfileCard user={user}/> : <CircularProgress  sx={{margin: '0 auto'}}/>}
  
    </div>
    );
}
