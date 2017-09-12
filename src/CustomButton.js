import React from 'react';
import {Button} from 'semantic-ui-react';
import styled from 'styled-components';

const CustomButton = ({className, children, ...otherProps}) => (
  <Button className={className} {...otherProps}>{children}</Button>
);

export default styled(CustomButton)`
  border-radius: 0px !important;
`;