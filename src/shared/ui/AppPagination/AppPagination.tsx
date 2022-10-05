import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppPagination.module.scss'
import Pagination from '@mui/material/Pagination'

interface  IAppPaginationProps {
    className?: string
    paginationConfig: {
        pageNumber: number,
        limit: number,
        totalPages: number,
    }
    onChange: (_event:any, page:number) => void
}

export const AppPagination = ({ className, paginationConfig, onChange } : IAppPaginationProps) => {

    const {pageNumber, totalPages} = paginationConfig
    return (
        <div className={classNames(cls.AppPagination, {}, [className])}>
        {(totalPages > 1) && <Pagination
                size="small"  
                page={pageNumber} 
                onChange={onChange} sx={{ margin: '15px' }} 
                count={totalPages} />}
        </div>
);
}