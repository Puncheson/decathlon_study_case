import { PostCard } from 'entities/Post';
import { useEffect, useRef, useState } from 'react';
import { getPosts, TPost } from 'shared/api';
import { classNames } from 'shared/lib/classNames/classNames';

import LinearProgress from '@mui/material/LinearProgress'
import TextField from '@mui/material/TextField'
import cls from './PostList.module.scss'

import useInput from 'shared/lib/useInput/useInput';
import { searchedPostsFunc } from 'features/lib';
import { useGetPosts, useObserver } from 'shared/lib';
import { PostListNotifications } from '../lib/PostListNotifications';



interface  IPostListProps {
    className?: string
}

export const PostList = ({ className } : IPostListProps) => {

    const lastElement = useRef()

    const [pageNumber, setPageNumber] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const inputValue = useInput('')

    const {posts, loading, error} = useGetPosts(
        pageNumber, 
        (total, limit) => {
        setTotalPages(Math.round(total / limit))
        },
        inputValue.value
    )
   
    useObserver(
        lastElement,
        pageNumber < totalPages && inputValue.value.length < 1,
        loading, 
        () => {
        setPageNumber(pageNumber + 1)
    } )
  
    const setNotification = () => {
        if(inputValue.value.length) {
            return PostListNotifications.queryEmpty
        } else if (loading) {
            return PostListNotifications.search
        } else if (error) {
            return PostListNotifications.error
        } else {
            return PostListNotifications.empty
        }
    }


return (
    <>
    
        <TextField  {...inputValue}  color='warning' sx={{width: '100%', margin: '15px 0' }} id="outlined-basic" label="Search loaded posts" variant="outlined" />
   
    <div className={classNames(cls.PostList, {}, [className])}>
        {
            posts?.length ? posts.map((post) => {
                return <PostCard key={post.id} post={post}/>
            }) : <div>{setNotification()}</div>
        }
    </div>
    {loading ? <LinearProgress  /> : <></>}
    <div ref={lastElement} style={{height:20}}></div>
    </>
    
);
}