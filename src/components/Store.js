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
        </Box>
    )
}
export default Store;