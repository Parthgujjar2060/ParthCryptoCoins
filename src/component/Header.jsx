import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={4} shadow="base">[=]
      <Button variant="unstyled">
        <Link to="/">Home</Link>
      </Button>
      <Button variant="unstyled">

        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant="unstyled"
      >
        <Link to="/Coins">Coins</Link>
      </Button>
      <Button variant="unstyled">
        <Link to="/CoinDetail">CoinDetail</Link>
      </Button>
  
    </HStack>
  );
};

export default Header;
