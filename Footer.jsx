import React from "react";

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

function Footer() {
  const year = new Date();

  return (
    <footer>
      <p>Copyright {year.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
