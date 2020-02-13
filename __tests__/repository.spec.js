import {Repository} from '../repository.js'

describe('test repository operations', () => {

    const users = [
        {
            id: 1,
            username: 'Babidi',
            married: false,
            age: 85
        },
        {
            id: 2,
            username: 'Piccolo',
            married: true,
            age: 25
        }];

    const repository = new Repository(users)

    it('should return all users', () => {
        const usersFound = repository.findAll()

        expect(users).toBe(usersFound)
    })

    it('should return user', () => {
        const userFound = repository.findUser(2);

        expect({
            id: 2,
            username: 'Piccolo',
            married: true,
            age: 25
        }).toMatchObject(userFound)
    })

    it('should create user', () => {
        const userNumberBefore = repository.findAll().length;
        repository.updateUser({id: 0, username: 'c17', age: 27, married: true})
        const userNumberAfter = repository.findAll().length;

        expect(userNumberAfter).toBeGreaterThan(userNumberBefore)
    });

    it('should update user', () => {
        const userNumberBefore = repository.findAll().length;
        const userBefore = repository.findUser(1)
        repository.updateUser({id: 1, username: 'bu', age: 99, married: false})
        const userNumberAfter = repository.findAll().length;
        const userAfter = repository.findUser(1)

        expect(userNumberAfter).toBe(userNumberBefore)
        expect(userAfter).not.toMatchObject(userBefore)
    });

    it('should delete user', () => {
        const userNumberBefore = repository.findAll().length;
        repository.deleteUser(2)
        const userNumberAfter = repository.findAll().length;

        expect(userNumberAfter).toBeLessThan(userNumberBefore)
    })
})
