import React, { useEffect, useState } from 'react'
import UserCard from './userCard';
import { useUsers } from '@/context/userDataContext';
export default function bookmarkedUsers(props) {
    const { bookmarkedUsers, removeBookmarkedUsers } = useUsers();
    console.log('bookmark user', bookmarkedUsers)

    return (
        <div className='grid grid-cols-3 gap-y-[1rem] my-[2rem]'>
            {
                bookmarkedUsers?.length > 0 ? bookmarkedUsers?.map((item, index) => {
                    return <UserCard user={item} key={'bookmarkedUser_' + index} onBookmark={removeBookmarkedUsers} />
                }) : <>
                    Empty
                </>
            }
        </div>
    )
}
