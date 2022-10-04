import { useEffect, useState } from 'react';
import { getUsers, TUser } from 'shared/api';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TableCard.module.scss'
interface  ITableCardProps {
    className?: string,
    user: TUser
}
export const TableCard = ({ className, user } : ITableCardProps) => {
  
    // let user = {
    //     firstName: "Sara",
    //     id: "60d0fe4f5311236168a109ca",
    //     lastName: "Andersen",
    //     picture: "https://randomuser.me/api/portraits/women/58.jpg",
    //     title: "ms",
    // }
return (
    <div className={classNames(cls.TableCard, {}, [className])} onClick={() => {console.log(user.id)}}>
        <img className={cls.userImage} src={user.picture} alt={user.firstName} />
        <span className={cls.userId}>ID:({user.id})</span>
        <div className={cls.userName}>
            <span>{user.title}</span>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
        </div>
    </div>
);
}