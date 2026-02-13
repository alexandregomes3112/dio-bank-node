const db = [
    {
        
    }
]


export class UserService {
    createUser = (id: string, name: string, email: string) => {
        const user = {
            id, 
            name, 
            email
        }
        db.push(user)
        console.log(user)
    }

    getAllUsers = () => {
        return db;
    }
}