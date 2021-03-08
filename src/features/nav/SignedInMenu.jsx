import { Dropdown, Menu, Image } from "semantic-ui-react";
import React from "react";
import { Link } from "react-router-dom";

const SignedInMenu = ({ onSignOut }) => {
  return (
    <Menu.Item position='right'>
      <Image
        avatar
        spaced='right'
        src='https://semantic-ui.com/images/avatar/small/ade.jpg'
      />
      <Dropdown text='Jenny'>
        <Dropdown.Menu>
          <Dropdown.Item text='profile' icon='user' />
          <Dropdown.Item text='add event' icon='plus' as={Link} to='/create' />
          <Dropdown.Item onClick={onSignOut} text='sign out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
