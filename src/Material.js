import React from 'react';
import { RaisedButton, TextField, List, ListItem, Checkbox } from 'material-ui';

import styled from 'styled-components';

const Header = styled.div`
  width:100%;
  background: #333;
  padding: 1em;
  margin-bottom: 3em;
`;

const Container = styled.div`
  text-align: left;
  padding-left: 20%;
  padding-right: 20%;
`;

const ListIt = ({task, onChange}) => {
  return (
      <ListItem leftCheckbox={<Checkbox onCheck={onChange} checked={task.isComplete} label={task.name}/>} />
  )
};


const Material = ({task, onChange, onSubmit, displayTasks}) => {
  return (
    <div>
      <Header>
        <RaisedButton>Logout</RaisedButton>
      </Header>
      <Container>
        <form onSubmit={ onSubmit }>
          <TextField onChange={ onChange } value={ task }/>
          <RaisedButton type="submit">Submit</RaisedButton>
        </form>
        <List>
          {displayTasks(ListIt)}
        </List>
      </Container>
    </div>
  );
};

export default Material;