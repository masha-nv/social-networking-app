import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const SignedOutMenu = ({ setIsAuthenticated }) => {
  return (
    <Menu.Item position='right'>
      <Button
        onClick={() => setIsAuthenticated(true)}
        basic
        inverted
        content='Login'
        as={NavLink}
        to='#'
        style={{ marginRight: "5px" }}
      />
      <Button basic inverted content='Register' as={NavLink} to='#' />
    </Menu.Item>
  );
};

export default SignedOutMenu;
