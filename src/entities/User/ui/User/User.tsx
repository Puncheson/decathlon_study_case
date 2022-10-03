import { classNames } from 'shared/lib/classNames/classNames';
import cls from './User.module.scss'
interface  IUserProps {
className?: string
}

export const User = ({ className } : IUserProps) => {
return (
<div className={classNames(cls.User, {}, [className])}>

</div>
);
}