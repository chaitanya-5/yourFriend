import React from "react";
import Nav from "../Navbar/Nav.js";
import Footer from "../footer/Footer.js";
import "./Internship.css";
import { Button } from "react-bootstrap";

function Internship() {
  return (
    <div>
      <div className="pagenavcss">
        <Nav />
      </div>

      <div className="campaign-head">
        <h1>Internship</h1>
        <h5>
          India has been gripped in fear due to the COVID virus outbreak. People
          have had time to reflect on themselves. But it has been found that
          many have had psychotic breakdowns and have needed help from
          professionals to get their minds back to their normal lives. So the
          help of psychologists has never been needed more than now. Your Friend
          provides help with RCI licensed clinical psychologists with immense
          experience and in-depth knowledge of mental health issues. Your Friend
          requires interns who can learn and work under their supervision. This
          is an opportunity like no other for college students and graduates to
          get hands-on experience by getting a chance to work under
          professionals directly helping them in their career development.
        </h5>
        <Button onClick="https://www.youthindiafoundation.com/join/">
          Apply For Internship
        </Button>
      </div>

      <Footer />
    </div>
  );
}

export default Internship;
