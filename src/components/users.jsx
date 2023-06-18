import React, { useEffect, useState } from 'react'
import UserCard from './userCard';
import fetchUsers from '@/utils/fetchUsers';
import { useUsers } from '@/context/userDataContext';

export default function Users() {
    const [page, setPage] = useState(1);
    const { users, addUsers, addBookmarkedUsers } = useUsers();

    useEffect(() => {
        fetchUsers(page, 12).then(data => {
            console.log(data, 'fetch function' + page)
            addUsers(data)

        }).catch(err => console.log(err))
    }, [page,])
    return (
        <div>
            <div className='grid grid-cols-3 gap-y-[1rem] my-[2rem]'>
                {users?.length > 0 && users?.map((user, index) => {
                    return <UserCard user={user} key={'userCard_' + index} onBookmark={addBookmarkedUsers} />
                })}
            </div>
            <div className='w-fit m-auto bg-red-100 border-2 border-red-200 text-red-400 p-2 mb-[1rem]'>Note: there's a problem with Github users api, even after changing the page param in the api the data remains same ,so i Cound'nt implement pagination</div>
            <div className='flex w-fit m-auto text-[1.5rem]'>
                <button className='px-2 py-1 bg-slate-200 mr-[1rem]' onClick={() => {
                    if (page < 2) {
                        return alert('this is the fist page')
                    } else {
                        setPage(prev => prev - 1)
                    }
                }}>Prev</button>
                <button className='px-2 py-1 bg-slate-200' onClick={() => {
                    setPage(prev => prev + 1)
                }}>Next</button>
            </div>

        </div>
    )
}
