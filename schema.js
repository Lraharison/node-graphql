import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean,GraphQLList} from 'graphql'
import {Repository} from './repository'
import {users} from './data'

const repository = new Repository(users)

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {type: GraphQLInt},
        username: {type: GraphQLString},
        age: {type: GraphQLInt},
        married: {type: GraphQLBoolean}
    }
})

const QueryType = new GraphQLObjectType({
    name: 'query',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLInt}},
            resolve(_, args) {
                return repository.findUser(args.id)
            }
        },
        users: {
            type: GraphQLList(UserType),
            resolve(_, args) {
                return repository.findAll()
            }
        }
    }
});
const MutationType = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        updateUser: {
            type: UserType,
            args: {
                id: {type: GraphQLInt},
                username: {type: GraphQLString},
                age: {type: GraphQLInt},
                married: {type: GraphQLBoolean}
            },
            resolve(_, args) {
                return repository.updateUser({
                    id: args.id,
                    username: args.username,
                    age: args.age,
                    married: args.married
                })
            }
        },
        deleteUser: {
            type: GraphQLInt,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(_, args) {
                return repository.deleteUser(args.id)
            }
        }
    }
})

export const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
    graphiql: true
})
