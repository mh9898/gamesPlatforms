import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import {useRef} from "react";

interface  Props{
    onSearchInput: (search: string) => void
}

const SearchInput = ({onSearchInput}:Props) => {

    const ref = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={(event) =>{
            event.preventDefault()
            if (ref.current) onSearchInput(ref.current.value)
        }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch/>} />
            <Input ref={ref} borderRadius={20} placeholder={"Search for games..."} variant='filled'/>
        </InputGroup>
        </form>
    );
};

export default SearchInput;