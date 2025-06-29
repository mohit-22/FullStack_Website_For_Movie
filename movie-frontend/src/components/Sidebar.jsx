// import React from "react";
// import styled from "styled-components";

// const SidebarContainer = styled.div`
//   width: 200px;
//   height: 100vh;
//   background-color: #111;
//   color: white;
//   position: fixed;
//   top: 0;
//   left: 0;
//   padding-top: 60px;
//   display: flex;
//   flex-direction: column;
//   transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
//   transition: transform 0.3s ease-in-out;
//   z-index: 999;
// `;

// const SidebarItem = styled.div`
//   padding: 20px;
//   cursor: pointer;
//   border-bottom: 1px solid #333;

//   &:hover {
//     background-color: #222;
//   }
// `;

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <SidebarContainer isOpen={isOpen}>
//       <SidebarItem onClick={toggleSidebar}>Subscription</SidebarItem>
//       <SidebarItem onClick={toggleSidebar}>Genre</SidebarItem>
//       <SidebarItem onClick={toggleSidebar}>My List</SidebarItem>
//       <SidebarItem onClick={toggleSidebar}>Log in</SidebarItem>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;

// import React from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";


// const SidebarContainer = styled.div`
//   width: 200px;
//   height: 100vh;
//   background-color: #111;
//   color: white;
//   position: fixed;
//   top: 0;
//   left: 0;
//   padding-top: 60px;
//   display: flex;
//   flex-direction: column;
//   transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
//   transition: transform 0.3s ease-in-out;
//   z-index: 999;
// `;

// const SidebarItem = styled.div`
//   padding: 20px;
//   cursor: pointer;
//   border-bottom: 1px solid #333;

//   &:hover {
//     background-color: #222;
//   }
// `;

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const navigate = useNavigate();

//   const handleNavigate = (path) => {
//     navigate(path);
//     toggleSidebar(); // Sidebar close karne ke liye
//   };

//   return (
//     <SidebarContainer isOpen={isOpen}>
//       <SidebarItem onClick={() => handleNavigate("/")}>Home</SidebarItem>
//       <SidebarItem onClick={() => handleNavigate("/subscription")}>Subscription</SidebarItem>
//       <SidebarItem onClick={() => handleNavigate("/help")}>Help</SidebarItem>
//       <SidebarItem onClick={() => handleNavigate("/contactUs")}>contactUs</SidebarItem>
//       <SidebarItem onClick={() => {window.location.href = "http://localhost:3000"}}>My List</SidebarItem>
//       <SidebarItem onClick={() => handleNavigate("/login")}>Log in</SidebarItem>
//       <SidebarItem onClick={() => handleNavigate("/AboutUs")}>AboutUs</SidebarItem>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;

import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #111;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 999;
`;

const SidebarItem = styled.div`
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #333;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #222;
  }
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    toggleSidebar(); // Close sidebar after navigation
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarItem onClick={() => handleNavigate("/main")}>Home</SidebarItem>
      <SidebarItem onClick={() => handleNavigate("/subscription")}>Subscription</SidebarItem>
      <SidebarItem onClick={() => handleNavigate("/help")}>Help</SidebarItem>
      <SidebarItem onClick={() => handleNavigate("/contactUs")}>Contact Us</SidebarItem>
      <SidebarItem onClick={() => {window.location.href = "http://localhost:3000"}}>My List</SidebarItem>

      

      
      {/* Updated Watchlist link */}
      <SidebarItem>
        <SidebarLink to="/watchlist" onClick={toggleSidebar}>My Watchlist</SidebarLink>
      </SidebarItem>
      
      <SidebarItem onClick={() => handleNavigate("/login")}>Log in</SidebarItem>
      <SidebarItem onClick={() => handleNavigate("/AboutUs")}>About Us</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;