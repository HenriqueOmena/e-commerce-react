import React, { useEffect, useState } from "react";

const Imutability = () => {
  const initialState = {
    newTech: "",
    techs: ["PHP", "Laravel", "React", "Flutter"]
  };
  const [state, setState] = useState(initialState);

  const handleInputChange = e =>
    setState({ ...state, newTech: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setState({
      newTech: "",
      techs: [...state.techs, state.newTech]
    });
  };

  const handleDelete = tech => {
    const removeTech = state.techs.filter(tec => tec !== tech);
    setState({ techs: removeTech });
  };

  return (
    <div style={{ border: "solid 1px red", padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <ul>
          {state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button type="button" onClick={() => handleDelete(tech)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          onChange={handleInputChange}
          value={state.newTech}
          placeholder="Add new Tech"
        />

        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default Imutability;
