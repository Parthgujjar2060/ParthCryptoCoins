import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, HStack, VStack, Image } from '@chakra-ui/react';
import Loader from './Loader';
import { server } from '../index';

const ExchangeItem = ({ name, image, trust_score, url }) => (
  <div>
    <a href={url} target='_blank'>
      <p>Name: {name}</p>
      <p>Image: {image}</p>
      <p>Trust Score: {trust_score}</p>
      <VStack>
        <Image src={image} w="10" h="10" alt={name} />
      </VStack>
    </a>
  </div>
);

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges?page=3`);
        console.log(data);
        setExchanges(data);
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
      {loading ? (
        <Loader />
      ) : (
        <HStack wrap="wrap">
          {exchanges.map((item) => (
            <ExchangeItem
              key={item.id}
              name={item.name}
              image={item.image}
              trust_score={item.trust_score}
              url={item.url}
            />
          ))}
        </HStack>
      )}
    </Container>
  );
};



export default Exchanges;
