import NavbarContext  from "./NavbarContext";
import NavbarBody from './NavbarBody'
//TODO: refactor context directory
function Navbar() {
  return (
      <NavbarContext>
          <NavbarBody />
      </NavbarContext>

  );
}

export default Navbar;
