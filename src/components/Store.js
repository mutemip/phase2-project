import { Box, GridItem, Input, SimpleGrid} from "@chakra-ui/react";
import StoreItem from "./StoreItem";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";

function Store({items, onItemAdd}) {
    const [searchItem, setSearchItem] = useState(items)
    
    function handleSearchOnChange(e){
        let f = items.filter(item => 
            item.title.toLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setSearchItem(f);
    }
    useEffect(() => {
        setSearchItem(items)
    }, [items]);

    return (
        <Box>
            <Header title="Dirty Shop"/>
            <Box p={10}>
            <Search onSearch={handleSearchOnChange}/>
            {/* <Input onChange={handleSearchOnChange}
            placeholder="Search Items" mt={4} /> */}

            <SimpleGrid columns={4} spacing={4} mt={4} p={2}>
                {searchItem.map((item) => {
                    return <GridItem>
                        <StoreItem {...item} />
                    </GridItem>
                })}
            </SimpleGrid>
            </Box>
        </Box>
    )
}
export default Store;