## NodeJs Graphql
A simple nodejs application that povides a graphql API for manipulation of users with attributes :
- id
- username
- age
- married

## Testing with graphiQL ##
- get all users : 
````
query users {
  users {
    id
    username
    married
  }
}
````

- get user by id : 
````
query user {
  user(id:86){
    username
    age
    married
  }
}
````
- create user: 
````
mutation createUser {
  updateUser(id:0,username:"rakoto",age:29,married:false) {
    id
    username
  }
}
````

- update user :
````
mutation updateUser{
  updateUser(id:3,username:"rakoto",age:29,married:false){
    id
    username
    age
    married
  }
}
````
- delete user :
````
mutation deleteUser
{
  deleteUser(id:11)
}

````

