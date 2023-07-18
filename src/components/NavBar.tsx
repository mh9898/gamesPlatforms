import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput.tsx";

interface Props{
    onSearchInputNav: (search: string) => void
}

const NavBar = ({onSearchInputNav}:Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"60px"}></Image>
        <SearchInput onSearchInput={(search) => onSearchInputNav(search)}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
