import React from "react";
import { Button, Container, Icon, Menu } from "semantic-ui-react";
const NavBar = ({ setFormOpen, setOpenEditEvent }) => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item>
          <Icon name='group' size='large' />
        </Menu.Item>
        <Menu.Item content='Events App' />
        <Menu.Item content='Events' />
        <Menu.Item>
          <Button
            onClick={() => {
              setOpenEditEvent(null);
              setFormOpen(true);
            }}
            content='Create Event'
            positive
          />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='Login' />
          <Button basic inverted content='Register' />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
