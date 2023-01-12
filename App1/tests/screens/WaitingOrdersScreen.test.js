import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../../App";
import React from 'react';
import CustomButton from "../../src/components/CustomButton";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Waiting orders screen test', () => {
    
    test('Navigate to OrderScreen', async () => {

      render(<App/>);  
      
      const waitingOrders = await screen.findByText('Waiting orders')
      fireEvent.press(waitingOrders)

      expect(waitingOrders).toBeOnTheScreen()

      
      
    });
  
  });