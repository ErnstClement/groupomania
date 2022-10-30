import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import "../styles/Form.css";
import Loading from "./Loading";
import { useNavigate, Link } from "react-router-dom";

const baseUrl = "http://localhost:3000/api/auth/signup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = () => {
    console.log(postData);
    console.log("email: " + email);
    console.log("password: " + password);
    axios
      .post(baseUrl, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(({ response }) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
      });
  };

  return (
    <div className="signup-container">
      <div className="login-container">
        <div className="main">
          <Loading />
          <h1>Bienvenue sur le service de messagerie de Groupomania</h1>

          <div className="navbar">
            <Link to="/login">
              <Button className="btnLogin" type="submit">
                Se connecter
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Form className="create-form">
        <Form.Field>
          <label>Email :</label>
          <input
            placeholder="Entrez votre Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Mot de passe :</label>
          <input
            type="password"
            placeholder="Entrez votre mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
