
export class Repository {
    users = []

    constructor(users) {
        this.users = users
    }

    findAll = () => {
        return this.users
    }
    findUser = (id) => {
        const user = this.users.find(u => u.id === id)
        if (!user) {
            this.userNotFoundError(id)
        }
        return user
    }

    userNotFoundError = (id)=> {
        const msg = `user not found : ${id}`
        console.error(msg)
        throw new Error(msg)
    }

    updateUser = (user) => {
        if (user.id === 0) {
            let nextId = 0;
            this.users.forEach(u => {
                if (u.id > nextId) {
                    nextId = u.id
                }
            })
            user.id = nextId + 1;
            this.users.push(user)
        } else {
            const index = this.users.findIndex(u => u.id === user.id)
            console.log(index)
            if (index >= 0) {
                this.users[index] = user
            } else {
                this.userNotFoundError(user.id);
            }
        }
        return user
    }

    deleteUser = (id) => {
        const filteredUsers = this.users.filter(u => u.id !== id)
        if (filteredUsers.length !== this.users.length) {
            this.users = filteredUsers;
        } else {
            this.userNotFoundError(id)
        }
        return id
    }
}
