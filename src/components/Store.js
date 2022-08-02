import { Box, Button, Input, SimpleGrid, Stack } from "@chakra-ui/react";
import StoreItem from "./StoreItem";
import React, { useRef } from "react";

function Store({items, onItemAdd}) {
    const itemNameRef = useRef();
    const itemPriceRef = useRef();

    return (
        <Box p={4}>
            <SimpleGrid columns={4} spacing={4}>
                {items.map((item) => {
                    return <StoreItem title={item.title} price={item.price} />
                })}
            </SimpleGrid>
             
            <Input mt={10} ref={itemNameRef} placeholder="Item name" />
            <Input mt={2} ref={itemPriceRef} placeholder="Item price" type="number" />

            <Button mt={2} onClick={()=> {
                onItemAdd({
                    title: itemNameRef.current.value,
                    price: itemPriceRef.current.value
                })
            }}>Add Item</Button>
        </Box>
    )
}
export default Store;