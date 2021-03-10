import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../app/common/modal/modalReducer";

const SignedOutMenu = () => {
  const dispatch = useDispatch();
  return (
    <Menu.Item position='right'>
      <Button
        onClick={() => dispatch(openModal({ modalType: "LoginForm" }))}
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
