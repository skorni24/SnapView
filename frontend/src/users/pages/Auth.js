import React from "react";
import './Auth.css';
import Card from "../../shared/components/UIElements/Card";

const Auth = () => {
  return (
    <Card>
        <form>
            <input id="email" type="email" placeholder="Email" />
            <input id="password" type="password" placeholder="Password" />
            <button type="submit">LOGIN</button>
        </form>
    </Card>
  )
};


export default Auth;
