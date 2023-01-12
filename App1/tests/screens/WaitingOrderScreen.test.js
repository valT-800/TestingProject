import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../../App";
import React from 'react';

import {visibility} from '../../src/screens/WaitingOrderScreen'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Waiting order screen test', () => {

  test('Check visibility should be false', async () => {

    const {visibility} = render(<App/>);  
    
    const orders = await screen.findByText('Waiting orders')
    fireEvent.press(orders)

    const order = await screen.findByText('SO111114')
    fireEvent.press(order)

    expect(visibility).toBeFalsy()

  });


  test('Check visibility should be true', async () => {

    render(<App/>);  
    
    const orders = await screen.findByText('Waiting orders')
    fireEvent.press(orders)

    const order = await screen.findByText('SO111116')
    fireEvent.press(order)

    const button = await screen.findByText('Delivered')
    fireEvent.press(button)

    const buttonVisibility = require(visibility)

    expect(buttonVisibility).toBeTruthy()

  });
    
  
});