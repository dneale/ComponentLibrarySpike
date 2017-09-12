import React, { Component } from 'react';
import {List, Label, Checkbox, Divider, Form, Grid, Button, Input, Container} from 'semantic-ui-react'
import styled from 'styled-components';
import CustomButton from './CustomButton';

const Header = styled.div`
  width:100%;
  background: #333;
  padding: 1em;
  margin-bottom: 3em;
`;

const ListItem = ({task, onChange}) => {
  return (
    <List.Item key={task.key}>
      <Checkbox onChange={onChange} checked={task.isComplete} label={task.name}/>
    </List.Item>
  )
};


const Semantic = ({task, onChange, onSubmit, displayTasks}) => (
  <div>
    <Header>
      <Button>Logout</Button>

    </Header>

    <Container text>
      <Grid>

        <Grid.Row>
          <Grid.Column>
            <Form onSubmit={onSubmit}>
              <Form.Group inline>
                <Form.Field>
                  <Input value={task} onChange={onChange}/>
                </Form.Field>
                <Form.Button primary>Submit Task</Form.Button>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Divider/>
        <Grid.Row>
          <Grid.Column>
            <List>
              {displayTasks(ListItem)}
            </List>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>
  </div>
);

export default Semantic;
