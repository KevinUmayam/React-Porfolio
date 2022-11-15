import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Porfolio from "./pages/Porfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import NavTabs from "./NavTabs";

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // using a turnary operator to rener page based on which nav link is currently selected
  //   const renderPage = () => {
  //     currentPage === "AboutMe" ? (
  //       <AboutMe />
  //     ) : currentPage === "Porfolio" ? (
  //       <Porfolio />
  //     ) : currentPage === "ContactMe" ? (
  //       <ContactMe />
  //     ) : (
  //       <Resume />
  //     );
  //   };
  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
      case "Porfolio":
        return <Porfolio />;
      case "ContactMe":
        return <ContactMe />;
      case "Resume":
        return <Resume />;
      default:
        break;
    }
  };

  const pageSetter = (page) => setCurrentPage(page);

  return (
    <div>
      {/* passing props to child NavTabs */}
      <NavTabs currentPage={currentPage} pageSetter={pageSetter} />

      {renderPage()}
    </div>
  );
}
