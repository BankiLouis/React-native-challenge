
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, View, Button, Icon, Tabs } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import { Image } from 'react-native';

// tabs
import News from './news';
import Movies from './movies';
import Books from './books';

const drawerCover = require('../../../images/news.jpg');
const drawerImage = require('../../../images/news.jpg');
const {
  reset,
  pushRoute,
} = actions;

class Home extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

   replaceAt(route) {
    this.props.replaceAt('home', { key: route }, this.props.navigation.key);
  }


  render() {
    return (      
      <Container theme={myTheme}>
        <Header style={{ elevation: 0, height:80}}>
          <Image source={drawerCover} style={styles.drawerCover}>
          <Image
            square
            style={styles.drawerImage}
            source={drawerImage}
          />
        </Image>
          <Title>Home</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <View >
          <Tabs locked="false">            
            <News tabLabel="News" />
            <Movies tabLabel="Movies" />
            <Books tabLabel="Books" />
          </Tabs>
        </View>
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

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
