import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../../App";
import React from 'react';
import CustomButton from "../../src/components/CustomButton";


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('CustomButton test', () => {

  test('Navigate to All orders screen', async () => {

    const {navigate} = render(<App/>);  

    const button = render(<CustomButton title = 'All orders' event = {()=>navigate('Orders')} />)
    const touchable = await button.findByText('All orders')
   fireEvent.press(touchable)

    expect(screenTop).toContain('All orders')
    

  });

  test('Navigate to Waiting orders screen', async () => {

    const {navigate} = render(<App/>);   

    const button = render(<CustomButton title = 'Waiting orders' event = {()=>navigate('Waiting orders')} />)
    const touchable = await button.findByText('Waiting orders')
    fireEvent.press(touchable)
    expect(screenTop).toContain('Waiting orders')
    });

  
});