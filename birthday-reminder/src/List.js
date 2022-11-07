import React from "react";
import { data } from "./data";

const List = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name, age, image } = person;

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button onClick={() => removeItem(id)}>Delete</button>
          </article>
        );
      })}
    </React.Fragment>
  );
};

export default List;
