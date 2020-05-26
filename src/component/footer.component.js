import React, { Component } from "react";

class Footer extends Component {
  render() {
    const footerStyle = {
      height: "60px",
      lineHeight: "60px",
      backgroundColor: "#f5f5f5"
    };
    return (
      <footer style={footerStyle} className="footer bg-dark mt-5">
        <div className="container">
          <span className="text-light">This is dummy footer</span>
        </div>
      </footer>
    )
  }
}

export default Footer;