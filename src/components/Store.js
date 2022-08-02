import { Box, Button, GridItem, Heading, Input, SimpleGrid, Stack } from "@chakra-ui/react";
import StoreItem from "./StoreItem";
import React, { useRef } from "react";
import Header from "./Header";

function Store({items, onItemAdd}) {
    const itemNameRef = useRef();
    const itemPriceRef = useRef();

    return (
        <Box>
            <Header title="Dirty Shop"/>
            <SimpleGrid columns={4} spacing={4} mt={4} p={2}>
                {items.map((item) => {
                    return <GridItem>
                        <StoreItem {...item} />
                    </GridItem>
                })}
            </SimpleGrid>
        </Box>
    )
}
export default Store;