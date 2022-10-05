import { searchedUsers } from "features/lib"
import { useEffect, useState } from "react"
import { getUsers, TUser } from "shared/api"


export const useGetUsers = (
    pagination : {
        pageNumber: number,
        limit: number,
        totalPages: number,
    }, 
    callback: (limit: number, total: number) => void, 
    watch: any,
    query: string) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState<TUser[]>()

    const {pageNumber, limit} = pagination
    
    useEffect(() => {
        setLoading(true)
        getUsers({page: pageNumber, limit: limit}).then(res => {
            if(res?.data) {
                setUsers(res.data)
                callback(res.limit, res.total)
                setLoading(false)
            } else {
                setError(true)
            setLoading(false)
            }
            
        })
    }, [watch])
    return ({
        error,
        loading,
        users: searchedUsers(users, query)
    })
}