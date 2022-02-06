import {createContext , useState , useContext} from 'react'


const ContextState = createContext();
const ContextSetState = createContext()

const initialState = {
    open: false,
}

function ActivityContext ({children}) {
    const [state , setState] = useState(initialState)
    return (
        <ContextState.Provider value={state}>
            <ContextSetState.Provider value={setState}>
                {children}
            </ContextSetState.Provider>
        </ContextState.Provider>
    )
}
export {ContextState , ContextSetState};
export function useActivityState(){
    return useContext(ContextState)
}
export function useActivitySetState(){
    return useContext(ContextSetState)
}
export function useActivityActions () {
    const setState = useActivitySetState();
    const setActivityOpen = () => {
        setState(prev => ({...prev , open: true}))
    }
    const setActivityClose = () => {
        setState(prev => ({...prev  ,  open:false}))
    }
    return {
        setActivityOpen,
        setActivityClose
    }
}
export default ActivityContext
