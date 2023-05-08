import React from "react";
import { useAppDispatch, useAppSelector } from "../store/features/store";

const List = () => {
  const persons = useAppSelector((state) => state.person.persons);
  return (
    <>
      <p>This is A list</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
