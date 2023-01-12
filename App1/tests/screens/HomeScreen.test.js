import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../../App";
import React from 'react';
import { ReactTestRenderer } from "react-test-renderer";
import HomeScreen from "../../src/screens/HomeScreen";


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Home screen test', () => {

  test('Check for orders buttons', async () => {

      render(<App/>);  
      
      const allOrders = await screen.findByText('All orders')
      const waitingOrders = await screen.findByText('Waiting orders');

      expect(waitingOrders).toBeOnTheScreen()
      expect(allOrders).toBeOnTheScreen()

    });

  
});