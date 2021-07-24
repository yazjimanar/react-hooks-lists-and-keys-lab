import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const a_links = links.map((links, index) => {
    return (
      <a key={index} href={links}>
        {`${links} `}
      </a>
    );
  });

  return <div>{a_links}</div>;
}
export default NavBar;
