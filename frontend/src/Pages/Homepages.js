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
import { useEffect } from "react";
import { useHistory } from "react-router";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const Homepages = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="rgba(255, 255, 255, 0.5)"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="rgba(0, 0, 0, 0.5)"
      >
        <Text fontSize="3xl" fontFamily="Work sans">
          Welcome to ChatApp
        </Text>
      </Box>
      <Box
        bg="rgba(255, 255, 255, 0.5)"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        borderColor="rgba(0, 0, 0, 0.5)"
        color="blackAlpha.900"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em" borderColor="rgba(255, 255, 255, 0.5)">
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
