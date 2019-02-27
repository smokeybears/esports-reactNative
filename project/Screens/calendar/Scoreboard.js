import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
//import faker from 'faker';
import M from 'moment';
import DayCalendar from './DayCalendar';
import Events from './Events';
import type Moment from 'moment';
import { ActivityIndicator } from 'react-native'

export type EventType = {
  date: Moment,
  title: string,
  description: string,
  team1: string,
  team2: string,
  team1Score: string,
  team2Score: string,
};

export default class Scoreboard extends React.Component {
    static navigationOptions = {
      header: null
    };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <DayCalendar showDaysAfterCurrent={30} onSelectDate={(day) => {this.props.onDaySelect(M(day).date())}} />
       <Events events={this.props.events} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F53B1',
    paddingTop: 20,
  },
});
