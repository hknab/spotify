import Box from "@mui/material/Box";
import NavbarHeader from "components/molecules/NavbarHeader";
import MenuItems from "./MenuItems";
import Playlists from './Playlists'
import {useNavbarState , useNavbarActions} from "./NavbarContext";

function NavbarBody () {
    const {setNavbarOpen , setNavbarClose} = useNavbarActions()
    const {open} = useNavbarState()
    const headerProps = {
        setNavbarClose,
        setNavbarOpen,
        open
    }
return  (
    <Box
        sx={{
            backgroundColor: "secondary.1",
            width: open? "256px" : "97px",
            height: "100%",
            padding: "32px 31px 32px 31px",
            px: open ? "none" : '17px',
            overflowY: 'auto',
            overflowX: "hidden",
            transition:"all .3s ease-out"
        }}
    >
        <Box
            sx={{ display: "flex", alignItems: "center", flexDirection: "column", }}
        >
            <NavbarHeader  {...headerProps} />
            <MenuItems open={open}/>
            {open && (<Playlists/>)}

        </Box>
    </Box>
)
}

export default NavbarBody