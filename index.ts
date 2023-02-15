import myLog from "./src/helpers/myLog";
import { getUser, saveUser, updateUser } from "./src/my-lib/main";


myLog('aaaaa');

myLog('Inicializado')

let id = 23
let number = 23
let newUser = {
    id: number,
    firstName: 'string',
    lastName: 'string',
    role: 'string',
}

saveUser(id, newUser)
getUser(number)
updateUser(number, newUser)
