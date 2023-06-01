    
    import * as React from 'react';
    import { Searchbar } from 'react-native-paper';
    import { View, StyleSheet, TouchableOpacity, } from "react-native";
    const MyComponent = () => {
      const [searchQuery, setSearchQuery] = React.useState('');
    
      const onChangeSearch = query => setSearchQuery(query);
    
      return (
        <Searchbar style={styles.search}
        placeholder="Food, groceries, drinks, etc"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      );
    };
    
    export default MyComponent;

    const styles = StyleSheet.create({
search:{
 
  margin:10,
}
    })