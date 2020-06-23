import React from "react";
import Home from "pages/home";
import Header from "components/header";
import Footer from "components/footer";
// import Routes from "config/routes";
import { WrapperApp } from "./styles";

function App() {
  return (
    <WrapperApp>
      <Header />
      <Home></Home>
      <Footer />
    </WrapperApp>
  );
}

export default App;
