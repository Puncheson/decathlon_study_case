import { PostCard } from 'entities/Post';
import { useEffect, useRef, useState } from 'react';
import { getPosts, TPost } from 'shared/api';
import { classNames } from 'shared/lib/classNames/classNames';

import LinearProgress from '@mui/material/LinearProgress'
import TextField from '@mui/material/TextField'
import cls from './PostList.module.scss'
import { useObserver } from 'shared/lib/useObserver/useObserver';
import { searchedPosts } from 'features/Post/lib/searchedPosts/searchedPosts';
import useInput from 'shared/lib/useInput/useInput';


interface  IPostListProps {
    className?: string
}

export const PostList = ({ className } : IPostListProps) => {

    const [isPostsLoading, setPostsLoading] = useState(false)
    const [posts, setPosts] = useState<TPost[]>([])
    const lastElement = useRef()


    const [pageNumber, setPageNumber] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

 
   
    
    
    const inputValue = useInput('')

    const handleGetPosts = () => {
        setPostsLoading(true)
        getPosts({page: pageNumber, limit: 10}).then(res => {
            setPosts([...posts, ...res.data])
            setTotalPages(Math.round(res.total / res.limit))
            setPostsLoading(false)
        })
    }
   
   
    useObserver(lastElement, pageNumber < totalPages && inputValue.value.length<1, isPostsLoading, ()=> {
        setPageNumber(pageNumber + 1)
    } )
  


    useEffect(() => {
        handleGetPosts()
    }, [pageNumber])


  
    
return (
    <>
    
        <TextField  {...inputValue}  color='warning' sx={{width: '100%', margin: '15px' }} id="outlined-basic" label="Search loaded posts" variant="outlined" />
   
    <div className={classNames(cls.PostList, {}, [className])}>
        {searchedPosts(posts, inputValue.value).length ? searchedPosts(posts, inputValue.value).map((post) => {
            return <PostCard key={post.id} post={post}/>
        }) : inputValue.value.length? <div>There is no posts found with this query. You can load more posts and try to search again!</div> : isPostsLoading ? <div>Looking for posts</div> : <div>No posts found</div>}
        
    </div>
    {isPostsLoading ? <LinearProgress  /> : <></>}
    <div ref={lastElement} style={{height:20}}></div>
    </>
    
);
}