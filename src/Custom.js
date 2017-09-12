import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

import styled from 'styled-components';

const Header = styled.div`
  width:100%;
  background: #333;
  padding: 1em;
  margin-bottom: 3em;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 8px;
  border:none;
  background-color: #DDD;
  border: 1px solid #CCC;
  height: 3em;
`;



const ListItem = ({className, task, onChange}) => {
  return (
    <li className={className}>
      <label>
        <input onChange={onChange} type="checkbox" checked={task.isComplete} />
        <span>{task.name}</span>
      </label>
    </li>
  )
};

const StyledListItem = styled(ListItem)`
  list-style-type: none;
  padding: 10px 0;
  span {
    margin-left: 5px;
  }
`

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #CCC;
  height: 3em;
  margin-right: 1em;
`;

const Divider = styled.hr`
  border-color: #EEE;
  margin: 2em 0;
`;


const Custom = ({task, onChange, onSubmit, displayTasks}) => {
  return (
    <div>
      <Header>
        <Button>Logout</Button>
      </Header>
      <Grid>
        <Row>
          <Col xs={12} center>
            <form onSubmit={onSubmit}>
              <Input type="text" value={task} onChange={onChange} />
              <Button type="submit"> Submit Task </Button>
            </form>
            <Divider />
          </Col>
          <ul>
            {displayTasks(StyledListItem)}
          </ul>
        </Row>
      </Grid>
    </div>
  );
};

export default Custom;