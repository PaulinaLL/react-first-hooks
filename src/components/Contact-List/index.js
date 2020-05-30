import React from "react";
import Contact from "../Contact";

function ContactList(props) {
  return (
    <ul>
      {props.data.map((user, index) => {
        return <Contact key={index} user={user} />;
      })}
    </ul>
  );
}

export default ContactList;
