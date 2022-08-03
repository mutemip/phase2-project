import { Box, Center, GridItem, Input, SimpleGrid, Spinner} from "@chakra-ui/react";
import StoreItem from "./StoreItem";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import { Link } from 'react-router-dom';
import axios from "axios";

function Store() {
    const [searchItem, setSearchItem] = useState([])
    const [storeItem, setStoreItem] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //get method
        axios.get("https://fakestoreapi.com/products")
        .then(({data}) => {
          setLoading(false)
          setStoreItem(data)
         setSearchItem(data)
        })
      }, [])
    
    function handleSearchOnChange(e){
        let f = storeItem.filter(item => 
            item.title.toLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setSearchItem(f);
    }


    return (
        <Box>
            <Header title="Dirty Shop"/>
            {loading ? <Center mt={6}><Spinner /></Center>:
            <Box p={10}>
            <Search onSearch={handleSearchOnChange}/>


            <SimpleGrid columns={4} spacing={4} mt={4} p={2} >
                {searchItem.map((item) => {
                    return <GridItem key={item.id}>
                        <Link to={{
                            //passing data as state to another route
                            pathname: `/product/${item.id}`,
                            state: item
                        }}>
                        <StoreItem {...item} />
                        </Link>
                    </GridItem>
                })}
            </SimpleGrid>
            </Box>
            }
        </Box>
    )
}
export default Store;