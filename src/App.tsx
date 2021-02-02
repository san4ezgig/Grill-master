import React from "react";
import { Box, Container } from "@material-ui/core";
import OutOfGrillTable from "./components/OutOfGrillTable";
import JsonTextArea from "./components/JsonTextArea";
import Board from "./components/Board";
import { grey200 } from "./styles/colors";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Box justifyContent="flex-start" textAlign="start" p={1.5} bgcolor={grey200}
           mb={2} borderRadius={12}>
        Grillmaster
      </Box>
      <Box display="flex">
        <Box width="65%" mr={4}>
          <Box mb={2}>
            <Board/>
          </Box>
          <JsonTextArea/>
        </Box>
        <Box>
          <OutOfGrillTable/>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
