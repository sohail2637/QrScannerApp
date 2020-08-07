import React, { Component } from 'react';
import { Container, Header, Content, Spinner, View ,Text} from 'native-base';
export default class SpinnerExample extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Text>
            This is Hlep Desk come
        </Text>
        <Content>
          <Spinner />
          <Spinner color='red' />
          <Spinner color='green' />
          <Spinner color='blue' />
        </Content>
      </Container>
    );
  }
}