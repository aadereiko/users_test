import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Form, Table } from "react-bootstrap";
import { UsersWrapperElement } from "./elements";

import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

export const Users = ({ users, onNameFilterChange }) => {
  const [filterName, setFilterName] = useState("");

  const handleInputChange = useCallback(
    (e) => {
      setFilterName(e.target.value);
      if (onNameFilterChange) {
        onNameFilterChange(e.target.value);
      }
    },
    [setFilterName, onNameFilterChange]
  );

  return (
    <UsersWrapperElement>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Input name"
            onChange={handleInputChange}
            data-testid="input"
          />
        </Form.Group>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
      />
    </UsersWrapperElement>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired
  ),
  onNameFilterChange: PropTypes.func.isRequired,
};
