import React from "react";
import PersonItem from "./personItem";

function People(props) {
  return (
    <div className="flex flex-wrap justify-start items-center max-w-screen-lg">
      {props.items.map((person) => (
        <PersonItem
          netID={person.netID}
          name={person.name}
          position={person.position}
          image={person.image}
          description={person.description}
          linkedin={person.linkedin}
        />
      ))}
    </div>
  );
}

export default People;
