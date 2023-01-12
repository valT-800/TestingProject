import { render, screen } from '@testing-library/react-native';
import React from 'react';
import App from '../App';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  test('Renders snapshot as expected', async () => {

    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();

  });
  
  });

