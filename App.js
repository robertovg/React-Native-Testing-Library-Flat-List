import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { projectsMock } from './data/projectsMock';
import AppWithFlatList from './AppWithFlatList';
import AppWithoutFlatList from './AppWithoutFlatList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [...projectsMock],
    };
  }

  render() {
    const { projects } = this.state;
    // return <AppWithoutFlatList projects={projects} />;
    return <AppWithFlatList projects={projects} />;
  }
}
