import React from "react";
import { Grid, Text } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";
import { style } from "@material-ui/system";
import styled from "styled-components";


const Header = (props) => {
  const dispatch = useDispatch();
  const logoutBtn = () => {
    dispatch(userActions.logoutFB());
  }
  const loginBtn = () => {
    history.push("/login");
  }
  const signUpBtn = () => {
    history.push("/signup");
  }

  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Hdtx>MAGAZINE</Hdtx>
            <Button variant="outlined" color="primary" size="small" onClick={logoutBtn}>             
              로그아웃
            </Button>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
            <Hdtx>MAGAZINE</Hdtx>

            <ButtonGroup color="primary"  size="small" aria-label="small outlined button group">
              <Button onClick={loginBtn}>로그인</Button>
              <Button onClick={signUpBtn}>회원가입</Button>
            </ButtonGroup>

      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

const Hdtx = styled.h1`
  font-size: 30px;
  color: #0f1e66;
  letter-spacing: 3px;
  font-weight: bold;
`;

export default Header;