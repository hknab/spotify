import { ReactComponent as HomeIcon } from "assets/icons/home-bold.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search-empty.svg";
import { ReactComponent as LibraryIcon } from "assets/icons/library-empty.svg";
import { ReactComponent as LikeIcon } from "assets/icons/like-empty.svg";
export const menuItems = [
  [
    { text: "Home", Icon: <HomeIcon />, link: "/" },
    { text: "Search", Icon: <SearchIcon />, link: "/" },
    { text: "library", Icon: <LibraryIcon />, link: "/" },
  ],
  [{ text: "Liked Songs", Icon: <LikeIcon />, link: "/" }],
];
