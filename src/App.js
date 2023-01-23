import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { LoginForm } from "./components/LoginPage/LoginForm";
import { Users } from "./components/Users/Users";
import axios from "axios";
import React from "react";
import { Timer } from "./components/Timer/Timer";
const user = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [timer, setTimer] = useState(false);
  const [users, setUsers] = useState([]);
  const TimerHandler = () => {
    setTimer((prevState) => !prevState);
  };
  useEffect(() => {
    let result = JSON.parse(localStorage.getItem("Auth"));
    setisAuthenticated(!!result);
  }, []);
  const loginHandler = () => {
    setisAuthenticated((prevState) => !prevState);

    localStorage.setItem("Auth", JSON.stringify(true));
    return () => {
      localStorage.removeItem("Auth");
    };
  };

  useEffect(() => {
    axios.get(user).then((data) => {
      setUsers(data.data).cath((error) => {
        console.log(error);
      });
    });
  }, []);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} loginHandler={loginHandler}  timer={TimerHandler}/>
      {isAuthenticated ? (
        <Users
          isAuthenticated={isAuthenticated}
          setisAuthenticated={setisAuthenticated}
          users={users}
        />
      ) : (
        <LoginForm loginHandler={loginHandler} />
      )}
      {timer ? <Timer/> : null}
    </>
  );
}

export default App;
