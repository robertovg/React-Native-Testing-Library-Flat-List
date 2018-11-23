import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Project from './components/Project';
import { styles } from './components/styles';

export default class AppWithoutFlatList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <View style={styles.container}>
        <Text testID="header" style={styles.paragraph}>
          After this text, instead of FlatList I map the projects and it works with the Projects
        </Text>
        <View>
          {projects.map(item => (
            <Project key={item.id} name={item.name} />
          ))}
        </View>
      </View>
    );
  }
}
