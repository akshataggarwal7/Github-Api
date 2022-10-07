import { Box,Text } from "@chakra-ui/react";
import React from "react";
import "./Card.css";

function Card(props) {
  // console.log(props);
  return (
    <Box boxShadow={"xl"} backgroundColor={"#00B5D8"} className="card">
      <Box className="card-body">
        <Text fontSize={"lg"} fontWeight={"800"} className="card-body-header">
          {props.data.title
            ? props.data.title > 20
              ? props.data.title.substring(0, 20) + "..."
              : props.data.title
            : "Some issue"}
        </Text>
      </Box>
    </Box>
  );
}

export default Card;
