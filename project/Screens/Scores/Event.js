import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { EventType } from './Scoreboard';

export default class Event extends Component {

  props: {
    event: EventType,
  };

  render() {
    const { event } = this.props;
    const {
      date,
      title,
      description,
      team1,
      team2,
      team1Score,
      team2Score,
    } = event;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: team1 }}
            style={styles.image}
          />
          <Image
            source={{ uri: team2 }}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{date.calendar()}</Text>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={styles.text}>{description}</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}> {team1Score} </Text>
          <Text style={styles.scoreText}> {team2Score}  </Text>
        </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 15,
  },
  imageContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: StyleSheet.hairlineWidth,
    marginRight: 15,
    width: 47,
    height: 90,
  },
  scoreContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: StyleSheet.hairlineWidth,
    //marginRight: 15,
    width: 70,
    height: 90,
    position: 'absolute',
    right: 0,
  },
  scoreText: {
    color: '#FFFFFF',
    fontSize: 22,
    padding: 10,
    textAlign: 'center',
  },

  textContainer: {
    flex: 1,
  },
  image: {
    width: 45,
    height: 45,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.75)',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
