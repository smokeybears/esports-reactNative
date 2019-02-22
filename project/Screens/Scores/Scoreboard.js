import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import faker from 'faker';
import moment from 'moment';
import Calendar from './Calendar';
import Events from './Events';
import type Moment from 'moment';

export type EventType = {
  date: Moment,
  title: string,
  description: string,
  team1: string,
  team2: string,
  team1Score: string,
  team2Score: string,
};

// Generate fake event data
const FAKE_EVENTS: Array<EventType> = (() => {
  const startDay = moment().subtract(5, 'days').startOf('day');
  return [...new Array(64)].map(_ => ({
    date: startDay.add(4, 'hours').clone(),
    title: 'Luminosity vs Optic Gaming',                                             //faker.company.companyName()
    description: 'Call of Duty',
    // use random dimensions to get random urls
    team1: 'https://scufgaming.com/s/wp-content/uploads/2016/07/Luminosity.png',
    team2: 'https://scufgaming.com/s/wp-content/uploads/2016/07/OpticGaming.png',
    team1Score: '249',
    team2Score: '250',
  }));
})();

// Filter events by date
const filterEvents = (date: Moment): ?Array<EventType> =>
  FAKE_EVENTS.filter(event => event.date.isSame(date, 'day'));

export default class Scoreboard extends React.Component {

  state = {
    events: filterEvents(moment()),
  };

  onSelectDate = (date: Moment) => {
    this.setState({ events: filterEvents(date) });
  };

  render() {
    const { events } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Calendar showDaysAfterCurrent={30} onSelectDate={this.onSelectDate} />
       <Events events={events} />
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
