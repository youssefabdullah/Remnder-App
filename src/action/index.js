import { Add, Delete, Clear } from '../types'

export const add_remender = (text, date) => {
    const action = {
        type: Add,
        text: text,
        date
    }
    console.log(action)
    return action
}
export const delete_remender = (id) => {
    const action = {
        type: Delete,
        id
    }
    console.log("Delete",action)
    return action
}
export const clear_remender = () => {
    const action = {
        type: Clear
        
    }
    console.log("Clear",action)
    return action
}

