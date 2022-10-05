import { searchedPostsFunc } from "features/lib"
import { useEffect, useState } from "react"
import { getPosts, TPost } from "shared/api"

export const useGetPosts = (
        page: number,
        callback: (total: number, limit: number) => void,
        query: string,
        ) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState<TPost[]>([])

    useEffect(() => {
        setLoading(true)
        getPosts({page: page, limit: 10}).then(res => {
            if(res?.data) {
                setPosts([...posts, ...res.data])
                callback(res.total, res.limit)
                setLoading(false)
            } else {
                setError(true)
                setLoading(false)
            }
            
        })
    }, [page])

    return ({
        error,
        loading,
        posts: searchedPostsFunc(posts, query)
    })
}