import express from 'express'
import graphqlHTTP from 'express-graphql'
import {schema} from './schema'

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema
}))
app.listen(3000, () => {
    console.log('Listening on port 3000')
})
