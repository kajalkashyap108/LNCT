import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
//import { auth } from "../firebase"; // Adjust path based on your file structure
import { auth } from "@/firebase";
import { Button } from "@chakra-ui/react";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react"
import loginpgeimage from '../assets/exam.png'
//import Cards from "@/component/Cards";
import { Card } from "@chakra-ui/react";
import { CiTextAlignCenter } from "react-icons/ci";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully!");
      // Redirect or update state as needed
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    
    

    <div>
      <Navbar />
      <Flex>
        <div>
         <img src={loginpgeimage} alt="photo" />
        </div>

        
        <Card.Root width="320px" height="250px" margin="50px" bg='skyblue'>
      <h2 style={{textAlign:'center'}}><u>Login</u></h2>
      
      <form onSubmit={handleLogin}>
        <div style={{padding:'35px'}}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

       </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Flex justifyContent="flex-end" padding='10px' margin='10px'>
  <Button type="submit" bg="pink">Login</Button>
</Flex>

        </div>
      </form>
      </Card.Root>
      </Flex>
      <Footer />
    </div>
   
   
    
  );
};

export default Login;
