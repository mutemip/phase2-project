import { Box, Flex, Heading, Spacer, Tag, Text } from "@chakra-ui/react";
import React from "react";

function StoreItem({title, price}) {
    return (
        <Box p={4} borderRadius='lg' borderWidth="1px">
                <Heading noOfLines={2} size="sm" fontWeight="normal">
                    {title}
                </Heading>
                <Tag mt={4}>{price}</Tag>
        </Box>)
}
export default StoreItem;