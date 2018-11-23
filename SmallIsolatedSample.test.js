import React, { Component } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';

class AppWithFlatList extends React.Component {
  state = {
    projects: [
      { name: 'Super Important Project A', id: '01' },
      { name: 'Super Important Project B', id: '02' },
      { name: 'Super Important Project C', id: '03' },
    ],
  };

  render() {
    const Project = ({ name }) => <Text>{name}</Text>;
    return (
      <View>
        <Button
          title="remove last"
          onPress={() => this.setState(state => ({ projects: state.projects.slice(0, 2) }))}
        />
        <FlatList
          data={this.state.projects}
          renderItem={({ item }) => <Project name={item.name} />}
          keyExtractor={({ id }) => id}
          ListEmptyComponent={<Text>There are no projects</Text>}
        />
      </View>
    );
  }
}

test('FlatList', () => {
  // Still is not working
  const { debug, getByText } = render(<AppWithFlatList />);
  debug(); // renders 3 projects, A, B, C
  fireEvent.press(getByText('remove last'));
  debug(); // renders 2 projects, A, B
});
