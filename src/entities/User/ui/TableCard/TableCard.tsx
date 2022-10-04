
import {  TUser } from 'shared/api';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TableCard.module.scss'
import { useNavigate } from 'react-router-dom';
interface  ITableCardProps {
    className?: string,
    user: TUser
}
export const TableCard = ({ className, user } : ITableCardProps) => {
    const navigate = useNavigate()
return (
    <div className={classNames(cls.TableCard, {}, [className])} onClick={() => navigate(`/user/${user.id}`)}>
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