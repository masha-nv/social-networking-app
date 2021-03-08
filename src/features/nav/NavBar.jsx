import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Icon, Menu } from "semantic-ui-react";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
const NavBar = ({ setFormOpen, setOpenEditEvent }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }
  return (
    <Menu fixed='top' inverted borderless={true}>
      <Container>
        <Menu.Item as={NavLink} exact to='/'>
          <Icon name='group' size='large' />
          <Menu.Item>Events App</Menu.Item>
        </Menu.Item>

        <Menu.Item as={NavLink} to='/events' content='Events' />
        {isAuthenticated && (
          <Menu.Item>
            <Button
              as={NavLink}
              to='/create'
              // onClick={() => {
              //   setOpenEditEvent(null);
              //   setFormOpen(true);
              // }}
              content='Create Event'
              positive
            />
          </Menu.Item>
        )}
        {isAuthenticated ? (
          <SignedInMenu onSignOut={handleSignOut} />
        ) : (
          <SignedOutMenu setIsAuthenticated={setIsAuthenticated} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
