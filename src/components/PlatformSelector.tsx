import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms from "../hooks/usePlatfroms.ts";
import {Platform} from "../hooks/useGames.ts";

interface Props{
    onSelectedPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}

const PlatformSelector = ({selectedPlatform, onSelectedPlatform}: Props) => {

    const {errorMessage, data} =  usePlatforms()

    if (errorMessage) return  null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || "Platforms"}</MenuButton>
            <MenuList>
                {data.map(platform =>
                    <MenuItem
                        onClick={() => onSelectedPlatform(platform)}
                    key={platform.id}>
                    {platform.name}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;