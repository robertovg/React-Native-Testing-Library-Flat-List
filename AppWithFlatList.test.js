import React from 'react';
import { render, waitForElement } from 'react-native-testing-library';
import Project from './components/Project';
import { projectsMock } from './data/projectsMock';
import AppWithFlatList from './AppWithFlatList';

describe('<AppWithFlatList', () => {
  it('Should check if the text header is appearing well', async () => {
    const { queryAllByType, getByTestId, getByText, debug } = render(
      <AppWithFlatList projects={projectsMock} />
    );
    await waitForElement(() => getByTestId('header'));

    console.log('The render is not rendering the Flat list, but it works when executing');
    debug();

    // We check first if we render the 3 items
    const projectsRendered = queryAllByType(Project);
    expect(projectsRendered).toHaveLength(projectsMock.length);

    // Then just for fun if the 3 names of the projects are rendered
    projectsMock.forEach(project => {
      expect(getByText(project.name)).toBeTruthy();
    });
  });
});
