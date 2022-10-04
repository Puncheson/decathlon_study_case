import { useEffect, useState } from 'react';
import { getPosts, TPost } from 'shared/api';
import { classNames } from 'shared/lib/classNames/classNames';


import cls from './PostCard.module.scss'
import SvgIcon from '@mui/material/SvgIcon';
import Skeleton from '@mui/material/Skeleton'
import like from 'shared/svg/like.svg'
import { dateTransformer } from 'shared/lib/dateTransformer/dateTransformer';

interface  IPostCardProps {
className?: string,
post: TPost
}

export const PostCard = ({ className, post } : IPostCardProps) => {

    const [isImageLoad, setIsImageLoad] = useState(false)
    
return (
    
    <div className={classNames(cls.PostCard, {}, [className])}>
       {post ?  <>
            <div className={cls.PostCard__header} onClick={() =>console.log(post.owner.id)} >
                <img className={cls.userImage}  src={post.owner.picture} alt="userImage" />
                <div className={cls.userName}>
                    <span>{post.owner.title}</span>
                    <span>{post.owner.firstName}</span>
                    <span>{post.owner.lastName}</span>
                </div>
                
            </div>  
            {!isImageLoad && <Skeleton variant="rectangular" width={270} height={180} />}
            <img onLoad={() => setIsImageLoad(true)} title={post.id} className={cls.PostCard__postImage} src={post.image} alt={post.id}/>
            <div className={cls.userLikes}><SvgIcon component={like} sx={{ fontSize: 20, height: 15 }} inheritViewBox/>{post.likes} {post.tags.map(tag => <span key={tag}>#{tag} </span>)}</div>
            <span className={cls.userText}> {post.text}</span>
            
            <div className={cls.date}>{dateTransformer(post.publishDate)}</div>
   
       </> : <div>loading...</div>}
    </div>
);
}
