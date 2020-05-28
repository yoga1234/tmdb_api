import React, { Component } from "react";

class Footer extends Component {
  render() {
    const footerStyle = {
      height: "60px",
      lineHeight: "60px",
      backgroundColor: "#f5f5f5",
      textDecoration: "none",
      color: "#ffffff"
    };
    return (
      <footer style={footerStyle} className="footer bg-dark mt-5">
        <div className="container">
          <span className="text-light">&copy;<a href="https://yogasmara.com" className="blockquote"> yogasmara</a></span>
        </div>
      </footer>
    )
  }
}

export default Footer;