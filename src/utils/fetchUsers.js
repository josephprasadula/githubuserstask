const fetchUsers = async (page, perPage) => {
    const response = await fetch(`https://api.github.com/users?per_page=${perPage}&age=${page}`);
    const users = await response.json();
    return users;
};


export default fetchUsers;