import { Box, Flex, Heading, Spacer, Tag, Text } from "@chakra-ui/react";
import React from "react";

function StoreItem({title, price}) {
    return (
        <Box p={4} borderRadius='lg' borderWidth="1px">
            <Flex alignItems='center'>
                <Heading size="sm" fontWeight="normal">{title}</Heading>
                <Spacer />
                <Tag>{price}</Tag>
            </Flex>
        </Box>)
}
export default StoreItem;