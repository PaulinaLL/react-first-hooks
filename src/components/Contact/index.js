import React, { useState } from "react";

function Contact(props) {
  const [hover, setHover] = useState(false);
  const hideDetails = () => setHover(false);
  const showDetails = () => setHover(true);

  return (
    <li onMouseEnter={showDetails} onMouseLeave={hideDetails}>
      <h3>
        {props.user.first} {props.user.last}
      </h3>
      {hover && (
        <>
          <p>{props.user.email}</p>
          <p>{props.user.address}</p>
          <p>{props.user.created}</p>
          <p>{props.user.balance}</p>
        </>
      )}
    </li>
  );
}

export default Contact;
