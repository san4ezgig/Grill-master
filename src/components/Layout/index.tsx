import React from "react";
import { Box, Container } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import JsonTextArea from "../JsonTextArea";
import Board from "../Board";
import OutOfGrillTable from "../OutOfGrillTable";

const headerColor = grey[200];

const Layout = () => {
  return (
    <Container maxWidth="lg">
      <Box justifyContent="flex-start" textAlign="start" p={1.5} bgcolor={headerColor} color="text.secondary" mb={2} borderRadius={12}>
        Grillmaster
      </Box>
      <Box display="flex">
        <Box width={2 / 3} mr={4}>
          <Box mb={2}>
            <Board />
          </Box>
          <JsonTextArea/>
        </Box>
        <Box>
          <OutOfGrillTable />
        </Box>
      </Box>
    </Container>
  );
};

Layout.propTypes = {};

export default Layout;