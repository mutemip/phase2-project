import { Box, Heading, Tag, Image, Center, Button, Stack } from "@chakra-ui/react";
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
                <Stack>
                <Tag mt={4}>$ {price}</Tag>
                <Button size="sm" colorScheme="pink">Buy Now</Button>
                <Button size="sm">Share Product</Button>
                </Stack>
                
        </Box>)
}
export default StoreItem;