import React from "react";

const callbackUri = encodeURI("http://localhost:3000/callback");
const client_id="asd"
const Login = () => {
  const authLink = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${callbackUri}`;
  window.location.replace(authLink);
  return false;
};

export default Login;
