import React, { Component } from 'react';
import { Button, Container, Row, Col,  Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const Header = styled.div`
  width:100%;
  background: #333;
  padding: 1em;
  margin-bottom: 3em;
`;

const ListItem = ({task, onChange}) => {
  return (
    <li>
      <label>
        <input onChange={onChange} type="checkbox" checked={task.isComplete} />
        <span>{task.name}</span>
      </label>
    </li>
  )
};


const Bootstrap = ({task, onChange, onSubmit, displayTasks}) => (
  <div>
    <Header>
      <Button>Logout</Button>
    </Header>
    <Container>
      <Row>
        <Col sm="6">
          <Form inline onSubmit={onSubmit}>
            <Input type="text" value={task} onChange={onChange}/>
            <Button type="submit">Submit Task</Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <ul>
            {displayTasks(ListItem)}
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Bootstrap;