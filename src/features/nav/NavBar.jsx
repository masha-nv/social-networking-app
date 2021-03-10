import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Icon, Menu } from "semantic-ui-react";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const history = useHistory();

  return (
    <Menu fixed='top' inverted borderless={true}>
      <Container>
        <Menu.Item as={NavLink} exact to='/'>
          <Icon name='group' size='large' />
          <Menu.Item>Events App</Menu.Item>
        </Menu.Item>

        <Menu.Item as={NavLink} to='/events' content='Events' />
        <Menu.Item as={NavLink} to='/sandbox' content='Sandbox' />
        {isAuthenticated && (
          <Menu.Item>
            <Button as={NavLink} to='/create' content='Create Event' positive />
          </Menu.Item>
        )}
        {isAuthenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
};

export default NavBar;
