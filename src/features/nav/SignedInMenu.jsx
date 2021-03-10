import { Dropdown, Menu, Image } from "semantic-ui-react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../auth/authActions";

const SignedInMenu = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Menu.Item position='right'>
      <Image
        avatar
        spaced='right'
        src='https://semantic-ui.com/images/avatar/small/ade.jpg'
      />
      <Dropdown text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item text='profile' icon='user' />
          <Dropdown.Item text='add event' icon='plus' as={Link} to='/create' />
          <Dropdown.Item
            text='sign out'
            icon='power'
            onClick={() => dispatch(signOutUser())}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
