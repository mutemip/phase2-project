import { Box, Heading, Image } from "@chakra-ui/react";
import {useLocation} from 'react-router-dom'


function Header({title}){
    return <Box p={4} shadow="md">
        <Heading>{title}</Heading>
    </Box>
}


function Product(){
    const location = useLocation()
    const data = location.state
    console.log(data)
    

    if (!data) {
        window.location = "/";
    }
    return <Box>
        <Header title={data.title} />
        <Box p={8} d="flex" alignItems="center">
            <Image w={48} src={data.image} /> 
            <Box>
                <Heading>Price: ${data.price} </Heading>    
            </Box> 
        </Box>

        </Box>
}

export default Product;