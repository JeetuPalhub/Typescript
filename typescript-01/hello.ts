function add(x: number, y: number) {
    return x + y;
 }
 
 function createUser(user: { firstname: string; lastname?: string }) {
 if(!user.lastname) return 
 
     const trimmedLastName = user.lastname?.trim()
 }
 
 interface User {
     firstname: string;
     lastname? : string;
     email: string;
     profileImageUrl?: string;
 }
 
 function updateUser(user: User) {
     user
 }
 
 const payload: User = {
     firstname: '',
     email: ''
 }
 updateUser(payload)
 
 let x = add(4, 3)
 
 createUser({
     firstname: 'jeetu',
     lastname: 'pal',
 })
 
 
 function doSomething(x: number) {
 
 }
 doSomething(4)
 let num: number = 10
 doSomething(num)
 