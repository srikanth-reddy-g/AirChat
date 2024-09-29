import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import iconGif from "../iconV5.png";
import { useEffect } from "react";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <>
      <Container maxW="container.lg" centerContent paddingTop={"20vh"}>
        {/* Responsive Flexbox Container */}
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          alignItems="center"
          flexDirection={["column", "column", "row"]} // Stack on small screens, side by side on larger
        >
          {/* Welcome Section */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box boxSize="s">
              <Image src={iconGif} alt="AirChat Logo" />
            </Box>
            <Text
              fontSize={["2xl", "3xl", "4xl"]} // Responsive font size
              fontFamily="Work sans"
              fontWeight={"bold"}
              color="black"
              textAlign="center"
              marginTop="20px"
            >
              Welcome to AirChat
            </Text>
          </Box>

          {/* Login/Signup Section */}
          <Box
            d="flex"
            justifyContent="center"
            p={3}
            bg={"white"}
            w={["100%", "80%", "50%"]} // Full width on mobile, reduced width on larger screens
            m={["20px 0", "20px 0", "0px 15px"]} // Margin adjustments for small/large screens
            borderRadius="lg"
            borderWidth="1px"
          >
            <Text
              fontSize="4xl"
              fontFamily="Work sans"
              color="black"
              textAlign="center"
              mb="1em"
            >
              AirChat
            </Text>
            <Tabs variant="soft-rounded">
              <TabList mb={"1em"}>
                <Tab w={"50%"}>Login</Tab>
                <Tab w={"50%"}>Sign Up</Tab>
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
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
