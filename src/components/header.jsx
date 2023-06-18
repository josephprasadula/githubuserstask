import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import SearchBox from './searchBox';
import UserCard from './userCard';

export default function Header() {
    const router = useRouter();
    const [searchResults, setSearchResults] = useState([])
    return (<>
        <div>
            <div className="flex text-[2rem]">
                <Image src='/images.png' alt='logo' width={30} height={30}></Image>
                <h1 className='ml-[1rem] text-sky-600'>GitHub Users</h1>
            </div>
            <div className='w-[65%] flex justify-around m-auto text-[1.5rem] '>
                <button onClick={() => { router.push('/') }}>Users</button>
                <button onClick={() => { router.push('/bookmarkedUserPage') }}>Bookmarked Users</button>
                <SearchBox setSearchResults={setSearchResults} searchResults={searchResults} />

            </div>
            {searchResults?.length > 0 && <div className='pt-[1rem]'>
                <p className='text-[1.5rem] w-fit m-auto'>----------------Search Results----------------</p>
                <div className='grid grid-cols-3 gap-y-[1rem] my-[2rem] border-b-2 border-black pb-4'>
                    {searchResults?.length > 0 && searchResults?.map((user, index) => {
                        return <div className='flex w-[75%] justify-around m-1 items-center border-slate-200 border-2 p-2 m-auto' key={'searched_result' + index}>
                            <img src={user?.avatar_url} className='w-[5rem] rounded-full' />
                            <span>{user?.login}</span>
                        </div>
                    })}
                </div></div>}
        </div >
    </>

    )
}
