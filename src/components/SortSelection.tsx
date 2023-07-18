
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

interface Props{
    onSelectSortOrder: (sortOrder: string) => void
    selectedOrder: string
}

const SortSelection = ({onSelectSortOrder, selectedOrder}:Props) => {

    const sortOrders = [
        {value: "", label: "Relevance"},
        {value: "-added", label: "Date Add"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release Date"},

        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average rating"},
    ]

    const currentSortOrder = sortOrders.find((order) => selectedOrder === order.value)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order By: {currentSortOrder?.label || "Relevance"}</MenuButton>
            <MenuList>
                {sortOrders.map((order) =>
                    <MenuItem
                        onClick={() => onSelectSortOrder(order.value)}
                        key={order.value}>
                            {order.label}
                    </MenuItem> )}

            </MenuList>
        </Menu>
    );
};

export default SortSelection;