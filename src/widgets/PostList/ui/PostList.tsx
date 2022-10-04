import { PostCard } from 'entities/Post';
import { useEffect, useRef, useState } from 'react';
import { getPosts, TPost } from 'shared/api';
import { classNames } from 'shared/lib/classNames/classNames';

import LinearProgress from '@mui/material/LinearProgress'
import cls from './PostList.module.scss'
import { useObserver } from 'shared/lib/useObserver/useObserver';


interface  IPostListProps {
    className?: string
}

export const PostList = ({ className } : IPostListProps) => {

    const [posts, setPosts] = useState<TPost[]>([])
    const [pageNumber, setPageNumber] = useState(1)
    const [isPostsLoading, setPostsLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(1)
    const lastElement = useRef()
 
    const handleGetPosts = () => {
        setPostsLoading(true)
        getPosts({page: pageNumber, limit: 10}).then(res => {
            setPosts([...posts, ...res.data])
            setTotalPages(Math.round(res.total / res.limit))
            setPostsLoading(false)
        })
    }

    useObserver(lastElement, pageNumber < totalPages, isPostsLoading, ()=> {
        setPageNumber(pageNumber + 1)
    } )

    useEffect(() => {
        handleGetPosts()
    }, [pageNumber])


    
    
return (
    <>
    <div className={classNames(cls.PostList, {}, [className])}>
        {posts ? posts.map((post) => {
            return <PostCard key={post.id} post={post}/>
        }) : <>There is no posts...</>}
        
    </div>
    {isPostsLoading ? <LinearProgress  /> : <></>}
    <div ref={lastElement} style={{height:20}}></div>
    </>
    
);
}