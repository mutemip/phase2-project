import { Input } from "@chakra-ui/react";
import React from "react";

function Search({onSearch}) {

    
    
    return <Input 
        placeholder="Search Items" mt={4} 
        onChange={onSearch}/>
}

export default Search;