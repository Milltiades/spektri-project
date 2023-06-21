// import { createContext, useReducer } from 'react'

// export const EventsContext = createContext()

// export const eventsReducer = (state:any, action:any) => {
//     switch(action.type) {
//         case "SET_EVENTS" :
//             return {
//                 events: action.payload
//             }
//         case "CREATE_EVENT" :
//             return {
//                 events: [action.payload, ...state.events]
//             }  
//         default:
//             return state      
//     }

// }

// export const EventsContextProvider = ({ children }: any) => {

//     const [state, dispatch] = useReducer(eventsReducer, {
//         events: null
//     })

//     dispatch({ type: 'SET_EVENTS', payload: [{},{}]})
//     return (
//         <EventsContext.Provider value={{...state, dispatch}}>
//             { children }
//         </EventsContext.Provider>

//     )
// }