const users = [];
const addUser = ({id ,name,room}) =>{
name = name.trim().toLowerCase();
room = room.trim().toLowerCase();
const existingUser = users.find((user) => user.room === room && user.name===name);
if(existingUser){
    return{error : 'Username is Taken'}
}
const user = {id , name, room};
users.push(user);
return {user}
}
const removeUser = (id) =>{
const index = users.findIndex((user) => user.id ===id);
if(index!== -1){
    return users.splice(index, 1)[0];
}
    
}
const getUsersIdRoom = (room) =>(room)=>users.filter((user) => user.room === room);
const getUser = (id) =>users.find((user) =>user.id === id);
module.exports = {addUser,removeUser,getUser,getUsersIdRoom};