
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
           
                <AppLink to={'/'} className={cls.mainLink}>Главная</AppLink>
                <AppLink to={'/users'}>О сайте</AppLink>
                <AppLink to={'/user/2'}>юзер</AppLink>
            </div>
        </div>
    );
};

