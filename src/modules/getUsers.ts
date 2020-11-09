import { User } from "./User";

export function getUserList()
{    
    let userArray: User[] = [];
    for (let index = 0; index < 300; index++) {
       
        let newUser : User = {
            id: index,
            name: "User "+index.toString(),
            clicked: 0
        }
        userArray.push(newUser);
    }    
    return userArray;
}
