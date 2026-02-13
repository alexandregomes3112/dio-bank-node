export interface User {
    id: string;
    name: string;
    email: string;
}

const db = [
    {
        id: "001",
        name: "Alexandre Gomes",
        email: "alexandre@diobank.com"
    }
]


export class UserService {
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = (id: string, name: string, email: string) => {
        const user = {
            id, 
            name, 
            email
        }
        this.db.push(user)
        console.log("Updated DB: ", this.db)
    }

    getAllUsers = () => {
        return this.db;
    }

    deleteUser = (id: string) => {
        const userIndex = this.db.findIndex(user => user.id === id);
        console.log("Deleted User: ", userIndex)
    }
}