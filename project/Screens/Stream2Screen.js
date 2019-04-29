import React from 'react';
import { Button, Text, View, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, WebView} from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {

  static navigationOptions = {
    headerStyle: {
    backgroundColor: '#3F53B1',
      },
  headerTitleStyle: {
    color: 'white',
      },
  title: 'Twitch Live Streams',
  };

  constructor(props) {
    super(props);
    this.state = { text: '', streams: [] };
    this.Search()
  }

  Search = () => {
    console.log(this.state.text);
    var query = encodeURI(this.state.text);
    fetch(`https://api.twitch.tv/kraken/search/streams?q=${query}&limit=100&client_id=hqtr6w669ykfhj1oawpvh6fgnizcwh`)
      .then(function(response) {
        return response.json();
      })
      .then((myJson) => {
        console.log('myJson');
        this.setState({
          streams: myJson
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection: 'row', width: window.width, margin: 10, padding: 0, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#888', borderRadius:10, backgroundColor:'#fff'}}>
          <View style={{flex:4}}>
            <TextInput style={{padding: 10}}
                onChangeText={(text) => this.setState({text})}
                placeholder="Search Stream..."
                onSubmitEditing={this.Search}
                value={this.state.text}
            />
          </View>
          <View style={{flex:1.2, backgroundColor: '#3F53B1', borderBottomRightRadius: '6px', borderTopRightRadius: '6px'}}>
            <Button color='white' title= 'Search' onPress={this.Search}>
            </Button>
          </View>
        </View>


                <TouchableHighlight
                style={styles.gameView}
                underlayColor='#f1f1f1'
                onPress={ this.props.onPressGame }
              >
                <View style={styles.gameContainer}>
                  <View style={styles.boxartView}>
                    <Image
                      style={styles.boxartConatianer}
                      source={require('image!boxart')}
                      resizeMode="contain" >
                      <Text numberOfLines={3} style={styles.gameTitle}>{this.props.game.name}</Text>
                    </Image>
                    <Animated.Image
                      style={[styles.gameImg, {opacity: this.state.bounceValue}]}
                      source={{uri: this.props.game.box.large}}
                      resizeMode="contain"
                      onLoad={ this._onImageLoad }
                    />
                  </View>
                </View>
              </TouchableHighlight>
            );
          },
        });


      <ScrollView style={{ width: '95%'}}>
      {this.state.streams.streams && this.state.streams.streams.map(stream => (
        <TouchableOpacity style={styles.element} onPress={() => this.props.navigation.navigate('ScreenTwo', {
          watch : `https://www.twitch.tv/${stream.channel.name}`})}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex:4, padding: 10, }}>
            <Text style={{ fontSize: 18, color: 'white'}}>
              /{stream.channel.display_name}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: 'white', fontfamily: 'Georgia'}}>
               Game: {stream.game}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: 'white'}}>
              Viewers: {stream.viewers}
            </Text>
          </View>
          <View style={{flex: 2, alignItems: 'flex-end'}}>
              <Image
                source={{ uri: stream.preview.large }}
                style={{ height: '100%', width: 105}}
              />
          </View>
        </View>
        </TouchableOpacity>
        ))}
        </ScrollView>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#3F53B1',
        },
    headerTitleStyle: {
      color: 'white',
        },
    title: 'Streams',
    };

  render() {

    const { params } = this.props.navigation.state;
    const watch = params ? params.watch : null;
    console.log(watch);
    return (
      <View  style={{height: '100%', borderColor: 'gray', borderWidth: 1, width: '100%'}}>
        <WebView
              source={{uri: watch}}
              style={{marginTop: 0}}
            />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  ScreenOne: {  screen: HomeScreen, },
ScreenTwo: {  screen: DetailsScreen, },
},
{headerMode: 'screen'});

const Stream2Screen = createAppContainer(RootStack);


export default Stream2Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    backgroundColor: '#243177',
  },
  element: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    backgroundColor: 'rgba(181, 181, 181, 0.5)',
    margin: 6,
    borderWidth: 1,
    borderColor: 'rgba(181, 181, 181, 0.9)',
    borderRadius: 2
  },

});
