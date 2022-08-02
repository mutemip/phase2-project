import { Box, Heading, Tag, Image, Center } from "@chakra-ui/react";
import React from "react";

function StoreItem({title, price, image}) {
    return (
        <Box p={4} borderRadius='lg' borderWidth="1px">
                <Center>
                    <Image src={image} w={24}/>
                </Center>
                
                <Heading noOfLines={2} size="sm" fontWeight="normal" mt={4}>
                    {title}
                </Heading>
                <Tag mt={4}>{price}</Tag>
        </Box>)
}
export default StoreItem;