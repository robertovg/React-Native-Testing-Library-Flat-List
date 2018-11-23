import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import Project from './components/Project';
import { styles } from './components/styles';

export default class AppWithFlatList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <View style={styles.container}>
        <Text testID="header" style={styles.paragraph}>
          After this text, we should have the FlatList with the Projects
        </Text>
        <FlatList
          data={projects}
          renderItem={({ item }) => <Project name={item.name} />}
          keyExtractor={({ id }) => id}
          ListEmptyComponent={
            <View style={styles.container}>
              <Text style={styles.paragraph}>There are no projects</Text>
            </View>
          }
        />
      </View>
    );
  }
}
