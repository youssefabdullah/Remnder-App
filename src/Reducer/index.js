import {Add, Delete, Clear} from '../types'
const reducer = (state = [] , action) =>{
    let reminder = null
    if(action.type === Add){
        reminder = [...state , {text : action.text , date :action.date , id : Math.random()}]
        console.log(reminder)
        return reminder
    }
    else if(action.type === Delete){
        reminder = state.filter(reminders => reminders.id !== action.id)
        return reminder
    }
    else if(action.type === Clear){
        reminder = []
        return reminder
    }
    else{
        return state
    }
    
}
export default reducer