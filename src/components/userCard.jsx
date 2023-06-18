import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function UserCard(props) {
    const { user, onBookmark } = props
    const { login, avatar_url } = user
    const router = useRouter();

    return (
        <div className='flex w-[85%] justify-around m-1 items-center border-slate-200 border-2 p-2 m-auto'>
            <img src={avatar_url} className='w-[5rem] rounded-full' />
            <span>{login}</span>
            <button onClick={() => onBookmark(user)}><Image src='/bookmark-outline.svg' alt='bookamrk' width={25} height={25}></Image></button>
        </div>
    )
}
