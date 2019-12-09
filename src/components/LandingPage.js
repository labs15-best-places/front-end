import React from "react";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import {
  Container,
  StyledLink,
  Flex,
  Text,
  Hero,
  Box,
  Button,
  Grid
} from "../styles/index";
import heroImg from "../img/hero.jpg";
import TopCities from "./TopCities";
import { factors, randomFactor } from "../utils/factors";
import Categories from "./Categories";

const LandingPage = props => {
  const chosenFactor = randomFactor(factors);

  return (
    <>
      <Container as="main">
        <SearchBar page="landing" {...props} />
        <Hero
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          background={` 
          linear-gradient(
            rgba(0, 0, 0, 0.30), 
            rgba(0, 0, 0, 0.30)
          ),
          
          url(${heroImg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          padding="130px 100px 100px"
        >
          <Box>
            <Text textAlign="center" as="h2" fontSize={"2.5rem"} color="white">
              Live in the Best Place
            </Text>
          </Box>
        </Hero>
        <Container textAlign="center">
          <Text as="h2">
            <StyledLink color="black" to="/explore">
              <Button> Explore!</Button>
            </StyledLink>
          </Text>
        </Container>
        <Container maxWidth="1200px" margin={"0 auto"} textAlign="center">
          <Text as="h2" textAlign="center">
            Categories
          </Text>
          <Categories />
        </Container>
        <Container textAlign="center">
          <Text as="h2" textAlign="center">
            Popular Cities
          </Text>
          <TopCities factor="score_total" {...props} />
        </Container>
        <Container textAlign="center">
          <Text as="h2" textAlign="center">
            Best Cities for {chosenFactor.displayName}
          </Text>
          <TopCities factor={chosenFactor.factor} {...props} />
        </Container>
      </Container>
      <Footer />
    </>
  );
};
//
export default LandingPage;
