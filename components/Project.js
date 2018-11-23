import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

const Project = ({ name }) => <Text style={styles.paragraph}>{name}</Text>;
export default Project;
