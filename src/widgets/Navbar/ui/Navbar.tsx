
import Logo from 'shared/svg/logo.svg'
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss'

interface  INavbarProps {
    className?: string
}

export const Navbar = ({ className } : INavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
           
                <AppLink to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink to={'/users'}>Users</AppLink>
             
            </div>
        </div>
    );
};

