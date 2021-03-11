import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Loading = ({ inverted = true, content = "Loading..." }) => {
  return (
    <Dimmer active>
      <Loader inverted={inverted} content={content} />
    </Dimmer>
  );
};

export default Loading;
