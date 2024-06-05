import * as React from "react";
import { Container, VStack, Box, Text, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box py={5} pr={5} pl={20} bg="gray.800" borderRadius="30px" w="full" maxW="container.xl">
        <Flex gap={5} direction={{ base: "column", md: "row" }}>
          <Box flex="1" w={{ base: "full", md: "15%" }}>
            <VStack mt={11} spacing={5} align="start" color="white">
              <Image loading="lazy" src="https://via.placeholder.com/86" boxSize="86px" />
              <Text fontSize="3xl" fontWeight="semibold">Samantha</Text>
              <Text fontSize="lg">samantha@email.com</Text>
              <Text mt={32}>Dashboard</Text>
              <Text mt={12}>Expenses</Text>
              <Text mt={10}>Wallets</Text>
              <Text mt={12}>Summary</Text>
              <Text mt={10}>Accounts</Text>
              <Text mt={11}>Settings</Text>
            </VStack>
          </Box>
          <Box flex="3" w={{ base: "full", md: "85%" }}>
            <Box pl={20} bg="white" borderRadius="30px" w="full" p={5}>
              <Flex gap={5} direction={{ base: "column", md: "row" }}>
                <Box flex="3" w="full">
                  <VStack align="start" spacing={5}>
                    <Box>
                      <Text fontSize="4xl" fontWeight="semibold" color="gray.800">Expenses</Text>
                      <Text mt={4} fontSize="base" color="gray.800">01 - 25 March, 2020</Text>
                    </Box>
                    <Image loading="lazy" src="https://via.placeholder.com/123" boxSize="123px" />
                  </VStack>
                  <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7828f9828a0665dcbbc753ef69b3be2ba7105914e9b9c58c0f22359bf7246524?" mt={12} boxSize="510px" />
                  <Box mt={14}>
                    <VStack align="start" spacing={6}>
                      <Text fontSize="lg" color="gray.800">Today</Text>
                      <Flex gap={4}>
                        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/788be02310a788361d7f2052f994ccfe7f4519b49463667de46049fe7063cdc4?" boxSize="48px" />
                        <Box>
                          <Text fontSize="base" fontWeight="medium" color="gray.800">Grocery</Text>
                          <Text mt={2.5} fontSize="sm" color="gray.700">5:12 pm • Belanja di pasar</Text>
                        </Box>
                      </Flex>
                      <Flex gap={4}>
                        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f05fda9df7128a3aef111a31078fe024f6c9013fcf10bf9c6586e5355fa1c9d?" boxSize="48px" />
                        <Box>
                          <Text fontSize="base" fontWeight="medium" color="gray.800">Transportation</Text>
                          <Text mt={2.5} fontSize="sm" color="gray.700">5:12 pm • Naik bus umum</Text>
                        </Box>
                      </Flex>
                      <Flex gap={4}>
                        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef7fa8b2cd39093a7758b568ddfbf819ba700145e21ab08ae5653a3d6fbe0af7?" boxSize="48px" />
                        <Box>
                          <Text fontSize="base" fontWeight="medium" color="gray.800">Housing</Text>
                          <Text mt={2.5} fontSize="sm" color="gray.700">5:12 pm • Bayar Listrik</Text>
                        </Box>
                      </Flex>
                      <Text fontSize="lg" color="gray.800" mt={16}>Monday, 23 March 2020</Text>
                      <Flex gap={4}>
                        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47d758dafd688a3683fbed10b6253d2a20ced73f1157d99ba1626c8f7209dfe0?" boxSize="48px" />
                        <Box>
                          <Text fontSize="base" fontWeight="medium" color="gray.800">Food and Drink</Text>
                          <Text mt={4} fontSize="sm" color="gray.700">5:12 pm • Makan Steak</Text>
                        </Box>
                      </Flex>
                      <Flex gap={4}>
                        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1891006e39ee01be8bc048b5b86c75de85e9964247dc2f753babde769afffb6d?" boxSize="48px" />
                        <Box>
                          <Text fontSize="base" fontWeight="medium" color="gray.800">Entertainment</Text>
                          <Text mt={3.5} fontSize="sm" color="gray.700">5:12 pm • Nonton Bioskop</Text>
                        </Box>
                      </Flex>
                    </VStack>
                  </Box>
                </Box>
                <Box flex="2" w="full">
                  <Box bg="gray.50" p={12} borderRadius="md">
                    <Text fontSize="xl" color="gray.800">Where your money go?</Text>
                    <VStack spacing={4} mt={10}>
                      <Flex justify="space-between" w="full">
                        <Text fontSize="sm" fontWeight="medium" color="gray.800">Food and Drinks</Text>
                        <Text fontSize="sm" color="gray.800">872.400</Text>
                      </Flex>
                      <Box bg="gray.100" w="full" h="5px" borderRadius="md">
                        <Box bg="green.400" w="full" h="full" borderRadius="md" />
                      </Box>
                      <Flex justify="space-between" w="full">
                        <Text fontSize="sm" fontWeight="medium" color="gray.800">Shopping</Text>
                        <Text fontSize="sm" color="gray.800">1.378.200</Text>
                      </Flex>
                      <Box bg="gray.100" w="full" h="5px" borderRadius="md">
                        <Box bg="green.400" w="full" h="full" borderRadius="md" />
                      </Box>
                      <Flex justify="space-between" w="full">
                        <Text fontSize="sm" fontWeight="medium" color="gray.800">Housing</Text>
                        <Text fontSize="sm" color="gray.800">928.500</Text>
                      </Flex>
                      <Box bg="gray.100" w="full" h="5px" borderRadius="md">
                        <Box bg="green.400" w="full" h="full" borderRadius="md" />
                      </Box>
                      <Flex justify="space-between" w="full">
                        <Text fontSize="sm" fontWeight="medium" color="gray.800">Transportation</Text>
                        <Text fontSize="sm" color="gray.800">420.700</Text>
                      </Flex>
                      <Box bg="gray.100" w="full" h="5px" borderRadius="md">
                        <Box bg="green.400" w="full" h="full" borderRadius="md" />
                      </Box>
                      <Flex justify="space-between" w="full">
                        <Text fontSize="sm" fontWeight="medium" color="gray.800">Vehicle</Text>
                        <Text fontSize="sm" color="gray.800">520.000</Text>
                      </Flex>
                      <Box bg="gray.100" w="full" h="5px" borderRadius="md">
                        <Box bg="green.400" w="full" h="full" borderRadius="md" />
                      </Box>
                    </VStack>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;