import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TableCard.module.scss'
interface  ITableCardProps {
className?: string
}
export const TableCard = ({ className } : ITableCardProps) => {
    
return (
    <div className={classNames(cls.TableCard, {}, [className])}>
        
    </div>
);
}