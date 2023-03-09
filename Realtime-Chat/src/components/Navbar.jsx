import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Get Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span style={{  fontSize: '17px'}}>{currentUser.displayName}</span>
        <button style={{ borderRadius: '5px' , fontSize: '15px'}} onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
