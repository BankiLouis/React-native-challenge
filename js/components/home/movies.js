// movie feed view: By Banki Louis
import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text,Thumbnail, View, Button, Icon } from 'native-base';
import { actions } from 'react-native-navigation-redux-helpers';
import { connect } from 'react-redux';
import styles from './styles';

import { Image } from 'react-native';


const logo = require('../../../images/news.jpg');
const cardImage = require('../../../images/news.jpg');
const cardImage1 = require('../../../images/news.jpg');
const cardImage2 = require('../../../images/news.jpg');
const cardImage3 = require('../../../images/news.jpg');

const {
  replaceAt,
} = actions;

export default class Movies extends Component { 
  static propTypes = {
    openDrawer: React.PropTypes.func,
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('home', { key: route }, this.props.navigation.key);
  }
  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card style={[styles.cardFeed, { flex: 0 }]}>
            <CardItem>
              <Thumbnail source={logo} />
              <Text >#BidonChallenge</Text>
              <Text note>By Banki louis, 1 hour ago</Text>
            </CardItem>

            <CardItem>
              <Image style={{ resizeMode: 'cover', width: null }} source={cardImage} />
            </CardItem>
            
          </Card>
          <Card style={[styles.cardFeed, { flex: 0 }]}>
            <CardItem>
              <Thumbnail source={logo} />
              <Text>#BidonChallenge</Text>
              <Text note>By Lee Roi, 2 hours ago</Text>
            </CardItem>

            <CardItem>
              <Image style={{ resizeMode: 'cover', width: null }} source={cardImage1} />
            </CardItem>

            <CardItem>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button transparent>
                  <Icon name="ios-sad-outline" style={{color: 'red'}}/>
                  6
                </Button>
                <Button transparent>
                  <Icon name="ios-chatboxes" style={{color: '#5C4196'}}/>
                  139
                </Button>
                 <Button transparent>
                  <Icon name="md-share" style={{color: '#5C4196'}}/>
                  13
                </Button>
                <Button transparent>
                  <Icon name="ios-happy-outline" style={{color: 'green'}}/>
                  97
                </Button>
              </View>
            </CardItem>
          </Card>
          <Card style={[styles.cardFeed, { flex: 0 }]}>
            <CardItem>
              <Thumbnail source={logo} />
              <Text>#BidonChallenge</Text>
              <Text note>By Lee Roi, 2 hour ago</Text>
            </CardItem>

            <CardItem>
              <Image style={{ resizeMode: 'cover', width: null }} source={cardImage2} />
            </CardItem>
          </Card>
          <Card style={[styles.cardFeed, { flex: 0 }]}>
            <CardItem>
              <Thumbnail source={logo} />
              <Text>#Mannequene Challenge</Text>
              <Text note>By Vady, 2 hour ago</Text>
            </CardItem>

            <CardItem>
              <Image style={{ resizeMode: 'cover', width: null }} source={cardImage3} />
            </CardItem>            
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}