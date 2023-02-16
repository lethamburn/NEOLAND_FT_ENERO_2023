import "./App.css";
import { Heading, Box, Button, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Box maxW="32rem">
        <Heading mb={4}>Modern online and offline payments for Africa</Heading>
        <Text fontSize="xl">
          Paystack helps businesses in Africa get paid by anyone, anywhere in
          the world
        </Text>
        <Button size="lg" colorScheme="green" mt="24px">
          Create a free account
        </Button>
      </Box>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </div>
  );
}

export default App;
