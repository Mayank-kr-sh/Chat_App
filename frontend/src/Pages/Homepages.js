import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useHistory } from "react-router";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const Homepages = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        // bgGradient={{
        //   base: "linear(to-r, teal.300,blue.500)",
        //   md: "linear(to-r, teal.300,blue.500)",
        //   lg: "linear(to-r, teal.300,blue.500)",
        // }}
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="3xl" fontFamily="Work sans">
          Welcome to ChatApp
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        color="blackAlpha.900"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepages;
