import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss'

interface  IMainLayoutProps {
className?: string,
children: React.ReactNode
}

export const MainLayout = ({children, className } : IMainLayoutProps) => {

return (

    <div className={classNames(cls.MainLayout, {}, [className])}>
        {children}
    </div>
);
}