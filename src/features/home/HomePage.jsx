import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";

const HomePage = () => {
  return (
    <Segment inverted textAlign='center' className='musthead'>
      <Container>
        <Header inverted as='h1'>
          <Icon
            name='group'
            size='massive'
            style={{ display: "block", margin: "auto" }}
          />
          Social Networking App
        </Header>
        <Button as={Link} to='/events' inverted>
          Get Started
          <Icon name='arrow right' />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
