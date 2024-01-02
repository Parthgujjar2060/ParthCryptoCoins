import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, HStack, VStack, Image, Heading } from '@chakra-ui/react';
import Loader from './Loader';
import { server } from '../index';
import ExchangeModel from './ExchangeModel';

const Exchanges = () => {
  const saveButton = async (model) => {
    try {
      const currentDate = new Date().toISOString();
  
      // Save data to Firebase Realtime Database
      await axios.post('https://cryptoapp-a9a19-default-rtdb.firebaseio.com/exchanges.json', {
        name: model.name,
        image: model.image,
        trust_score: model.trust_score_rank,
        url: model.url,
        rank: model.trust_score_rank,
        savedDate: currentDate, // Use a different key for saved date
        modelData: model, // Save the entire model data
      });
     const savedData = Object.values(data).pop();
      // Check if data was saved today
      if (savedData && savedData.savedDate === currentDate) {
        console.log('Already saved today');
      }
    } catch (error) {
      console.error('Error saving or retrieving data from Firebase:', error);
    }
     
  };

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
        setLoading(true);
      }
    };

    fetchExchanges();
  }, []);

  if (loading) {
    return (
      <Container maxW="container.x1">
        <Loader />
        <p>Loading...</p>
      </Container>
    );
  } else {
    return (
      <Container maxW="container.x1">
        <button onClick={() => saveButton({/* pass appropriate model data here */})}>Save</button>
        <HStack wrap="wrap">
          {exchanges.map((item) => (
            <ExchangeItem
              key={item.id}
              name={item.name}
              image={item.image}
              trust_score={item.trust_score_rank}
              url={item.url}
              rank={item.trust_score_rank}
              saveButton={() => saveButton(item)} // Pass the model data here
            />
          ))}
        </HStack>
      </Container>
    );
  }
};

const ExchangeItem = ({ name, image, trust_score, url, rank, saveButton }) => (
  <div className="border rounded p-4 m-4">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <p>Name: {name}</p>
      <p>Trust Score: {trust_score}</p>
      <VStack w="52" shadow="lg" p="8" borderRadius="lg" transition="all 0.3s" css={{ '&:hover': { transform: 'translateY(-10px)', shadow: 'xl' } }}>
        <Image src={image} w="10" h="10" objectFit="contain" alt={name} />
      </VStack>
      <Heading size="md" noOfLines={1} border={2}>
        {rank}
      </Heading>
      <p className="border-b-2">{name}</p>
    </a>
  </div>
);

export default Exchanges;
