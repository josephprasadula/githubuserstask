import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useUsers } from '@/context/userDataContext';

export default function SearchBox(props) {
    const { users, bookmarkedUsers } = useUsers();
    const [searchValue, setSearchValue] = useState('')
    const { searchResults, setSearchResults } = props
    const router = useRouter();
    function searchEvent() {
        // console.count('called')
        let regex = new RegExp(searchValue, "gi")
        if (router?.asPath == '/bookmarkedUserPage') {
            bookmarkedUsers.map((item) => {
                // console.log(regex, item?.login, item?.login.match(searchValue), item?.login.includes(searchValue), searchValue)
                if (item?.login.match(regex)) {
                    setSearchResults(prev => [...prev, item])
                }
            })
        } else {
            users.map((item) => {
                // console.log(regex, item?.login, item?.login.match(searchValue), item?.login.includes(searchValue), searchValue)
                if (item?.login.match(regex)) {
                    setSearchResults(prev => [...prev, item])
                }
            })
        }
    }
    function throttled(searchFunc) {
        // console.log('throtle called')
        let timeout;
        let prevExecTime = 0;
        return function (...args) {
            const currentTime = Date.now();
            // console.log('current time', currentTime, 'prev exec time', prevExecTime)
            if (currentTime - prevExecTime < 300) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    prevExecTime = currentTime;
                    searchFunc.apply(this, args);
                }, 300);
            } else {
                prevExecTime = currentTime;
                searchFunc.apply(this, args);
            }
        };
    }
    const throttledDelayFunc = throttled(searchEvent)
    return (
        <div className='w-[50%]'>
            <input className='w-full p-1 text-[1.2rem] border-2 border-sky-500 focus:ring-inset-0' placeholder='search bar...' type='text' onChange={(e) => {
                if (e?.target?.value == '') return setSearchResults([])
                setSearchValue(e.target?.value);
                throttledDelayFunc()
            }} />
        </div >
    )
}
