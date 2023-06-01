import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity } from "react-native";
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
  <Card style={styles.card} elevation={5}> 
  
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
    <Card.Content>
      <Text variant="titleLarge">Atta Pizza</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content> 
   
  </Card>
);

export default MyComponent;

const styles = StyleSheet.create({
  card: {
    margin:10,
   
  },
})
