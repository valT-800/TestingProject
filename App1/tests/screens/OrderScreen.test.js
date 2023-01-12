import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../../App";
import React from 'react';
import {visibility, location} from '../../src/screens/OrderScreen'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Order screen test', () => {

  test('Check if contains "Ready for delivery" button', async () => {

    render(<App/>);  
    
    const orders = await screen.findByText('All orders')
    fireEvent.press(orders)

    const order = await screen.findByText('SO111111')
    fireEvent.press(order)

    expect(screen).toContain('Ready for delivery')

  });

  test('Check if do not contains "Ready for delivery" button', async () => {

    render(<App/>);  
    
    const orders = await screen.findByText('All orders')
    fireEvent.press(orders)

    const order = await screen.findByText('SO111114')
    fireEvent.press(order)

    expect(screen).not.toContain('Ready for delivery')

  });

  test('Check visibility should be false', async () => {

    const {visibility} = render(<App/>);  
    
    const orders = await screen.findByText('All orders')
    fireEvent.press(orders)

    const order = await screen.findByText('SO111111')
    fireEvent.press(order)

    expect(visibility).toBeFalsy()

  });


  test('Check visibility should be true', async () => {

    render(<App/>);  
    
    const orders = await screen.findByText('All orders')
    fireEvent.press(orders)

    const order = await screen.findByText('SO111111')
    fireEvent.press(order)

    const button = await screen.findByText('Ready for delivery')
    fireEvent.press(button)

    const buttonVisibility = require(visibility)

    expect(buttonVisibility).toBeTruthy()

  });

  test('Check location value changed', async () => {

    render(<App/>);  
    const orders = await screen.findByText('All orders')
    fireEvent.press(orders)

    const order = await screen.findByText('SO111111')
    fireEvent.press(order)

    const button = await screen.findByText('Ready for delivery')
    fireEvent.press(button)

    const orderLocation = require(location)
    expect(orderLocation).toBe('00-00')

    fireEvent.changeText(
        getByPlaceholder(),
        '47-01',
      );
      orderLocation = require(location)
    expect(orderLocation).toBe('47-01')

  });

    
  
});