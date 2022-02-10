import {useRoutes} from 'react-router-dom'
import MainRoutes from "./MainRoutes";

const ThemeRoutes = ()=>{
    return useRoutes([MainRoutes])
}
export default ThemeRoutes