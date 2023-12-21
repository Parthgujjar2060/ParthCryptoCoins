import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';  
import { server } from '../index';

const Exchanges = () => {
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges?page=3`);

        console.log(data);
        setExchange(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchanges:', error);
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  return (  
    <Container maxW="container.x1">
      {loading ? 
        <Loader />
       : (
        <HStack wrap={"wrap"}>
          {exchange.map((item) => (
         
            <div key={item.id}>{item.name}</div>
          ))}
        </HStack>
      )}
    </Container>
  );
};

export default Exchanges;
