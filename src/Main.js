import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

import './main.css'
export default function Main() {
  const style = {
    color: '#000000'
  };
  return (
    <Container className="main" style ={style}>
      <Sidebar />
      <Dashboard />
    </Container>
  );
}

const Container = styled.div``;
