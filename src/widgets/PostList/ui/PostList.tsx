import { PostCard } from 'entities/Post';
import { useEffect, useState } from 'react';
import { getPosts, TPost } from 'shared/api';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PostList.module.scss'

interface  IPostListProps {
    className?: string
}

export const PostList = ({ className } : IPostListProps) => {

    const [posts, setPosts] = useState<TPost[] | undefined>()
    useEffect(() => {
        getPosts().then(res => {
            setPosts(res.data)
        })
    }, [])

return (

    <div className={classNames(cls.PostList, {}, [className])}>
        {posts ? posts.map((post) => {
            return <PostCard post={post}/>
        }) : <>loading...</>}
    </div>
);
}