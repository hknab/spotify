import NavbarContext  from "./NavbarContext";
import NavbarBody from './NavbarBody'

function Navbar() {
  return (
      <NavbarContext>
          <NavbarBody />
      </NavbarContext>

  );
}

export default Navbar;
