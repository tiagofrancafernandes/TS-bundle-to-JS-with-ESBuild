import myLog  from "../helpers/myLog"

interface User {
    id: number
    firstName: string
    lastName: string
    role: string
}

export function saveUser(id, newUser: User): void {
    myLog(newUser)
}

export function getUser(id: number): any {
    //
}

export function updateUser(id: number, update: Partial<User>) {
    const user = getUser(id)
    const newUser: any = { ...user, ...update }
    saveUser(id, newUser)
}
