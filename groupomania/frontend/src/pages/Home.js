import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Delete from "../components/Delete";
import Post from "./Post";
import axios from "axios";
import "../styles/Form.css";
import "../styles/Post.css";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:3000/api/post";

function Home() {
  let navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const deleteOnePost = (id) => {
    console.log("deleteposte", id);
    axios.delete(baseUrl + "/" + id).then((response) => {
      console.log(response);
      alert("Message supprimé.");
      navigate(0);
    });
  };
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        var data = response.data;
        setPosts(data);
        console.log("data", data);
      })

      .catch(({ response }) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
      });
  }, []);

  return (
    <div className="Home-container">
      <h1>Bienvenue sur la page de Home !</h1>;
      <div className="main-navigator">
        <Link to="/Post">
          <Button className="createPost" type="submit">
            Creer un post
          </Button>
        </Link>
      </div>
      <div className="post-container">
        {posts.reverse().map((post, i) => (
          <div key={i} className="post-block">
            <div className="post-user">
              <p id="id">Message envoyé par : {post.postedBy}</p>
              <div className="post-button">
                <Button onClick={() => deleteOnePost(post._id)}>Modifier</Button>
                <Button onClick={() => deleteOnePost(post._id)}>supprimer</Button>
              </div>
            </div>
            <div className="post-content">
              <h4>Message :</h4>
              <div className="post-text">
                <p>{post.text}</p>
              </div>
              <div className="post-img">
                <img src={post.imageUrl}></img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;