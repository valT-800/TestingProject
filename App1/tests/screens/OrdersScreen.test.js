import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../../App";
import React from 'react';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Orders screen test', () => {
    
    test('Navigate to OrderScreen', async () => {

      render(<App/>);  
      
      const allOrders = await screen.findByText('All orders')
      fireEvent.press(allOrders)

      
      expect(allOrders).toBeOnTheScreen()
    });
  
  });