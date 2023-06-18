import React, { useContext, useState, useEffect } from "react";
export const UsersContext = React.createContext();
export function useUsers() {
    return useContext(UsersContext);
}
export function UsersProvider({ children }) {
    const [users, setUsers] = useState([])
    const [bookmarkedUsers, setBookmarkedUsers] = useState([])
    useEffect(() => {
        if (bookmarkedUsers?.length > 0) {
            localStorage.setItem('users', JSON.stringify(bookmarkedUsers))

        }
    }, [bookmarkedUsers]);
    useEffect(() => {
        if (window?.localStorage) {
            let temp = localStorage.getItem('users')
            if (temp) {
                setBookmarkedUsers(JSON.parse(temp))
            } else {
                localStorage.setItem('users', [])
            }
        }
    }, [])
    function addUsers(users) {
        setUsers(users)
    }
    function addBookmarkedUsers(item) {
        const IsBookmarked = !!((bookmarkedUsers?.filter(user => user?.login == item?.login))?.length)
        // console.log('item', item, bookmarkedUsers?.filter(user => user?.login == item?.login), IsBookmarked)

        if (IsBookmarked) {
            alert('already bookmarked')
        } else {
            setBookmarkedUsers(prev => [...prev, item])
        }
    }
    function removeBookmarkedUsers(user) {
        setBookmarkedUsers(prev => prev.filter(item => item?.login !== user?.login))
    }
    const value = {

        addUsers,
        addBookmarkedUsers,
        removeBookmarkedUsers,
        bookmarkedUsers, users
    };
    return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
}