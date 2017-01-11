
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, Icon, View, Badge, Thumbnail } from 'native-base';
import { Image } from 'react-native';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';

import styles from './style';

const drawerCover = require('../../../images/news1.png');
const drawerImage = require('../../../images/news1.png');


class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content theme={myTheme} style={styles.sidebar} >
         <Image source={drawerCover} style={styles.drawerCover}>
         <Thumbnail source={drawerImage} style={styles.avatar}/>
        </Image>
        <List>
          <ListItem button onPress={() => this.navigateTo('home')} >
            <Text>Home</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('blankPage')} >
            <Text>Profile</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
