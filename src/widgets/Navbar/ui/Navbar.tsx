

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss'
import { useTheme } from 'app/providers/ThemeProvider';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import logo from 'shared/svg/logo.svg'
import moon from 'shared/svg/moon.svg'


interface  INavbarProps {
    className?: string
}

export const Navbar = ({ className } : INavbarProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button  onClick={toggleTheme}>
            <SvgIcon component={moon} inheritViewBox /> 
            </Button>
            <SvgIcon component={logo} sx={{ fontSize: 120, height: 40 }} inheritViewBox/>
            <div className={cls.links}>
                
                <AppLink to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink to={'/users'}>Users</AppLink>
             
            </div>
        </div>
    );
};

