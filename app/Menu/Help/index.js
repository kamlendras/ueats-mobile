import * as React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';

const MyComponent = () => (
  <List.AccordionGroup>
    <List.Accordion title="How Safe is STREETS FOODS ?" id="1">
      <List.Item title="We serve 100% Healthy and Hygienic foods." />
    </List.Accordion>
    <List.Accordion title="Is STREETS FOODS Plastic neutral ?" id="2">
      <List.Item title="Yes, We ship food in clay pots." />
    </List.Accordion>
    <View>
     
      <List.Accordion title="Is my money refundable ?" id="3">
        <List.Item title="Yes, If you are not satisified with your diner." />
      </List.Accordion>
    </View>
  </List.AccordionGroup>
);

export default MyComponent;