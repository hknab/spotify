import {createContext , useState , useContext} from 'react'


const ContextState = createContext();
const ContextSetState = createContext()

const initialState = {
    open: true,
}

function NavbarContext ({children}) {
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
export function useNavbarState(){
    return useContext(ContextState)
}
export function useNavbarSetState(){
    return useContext(ContextSetState)
}
export function useNavbarActions () {
    const setState = useNavbarSetState();
    const setNavbarOpen = () => {
        setState(prev => ({...prev , open: true}))
    }
    const setNavbarClose = () => {
        setState(prev => ({...prev  ,  open:false}))
    }
    return {
        setNavbarOpen,
        setNavbarClose
    }
}
export default NavbarContext
