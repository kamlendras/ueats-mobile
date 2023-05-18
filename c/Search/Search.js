    
    import * as React from 'react';
    import { Searchbar } from 'react-native-paper';
    
    const MyComponent = () => {
      const [searchQuery, setSearchQuery] = React.useState('');
    
      const onChangeSearch = query => setSearchQuery(query);
    
      return (
        <Searchbar
        placeholder="Food, groceries, drinks, etc"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      );
    };
    
    export default MyComponent;
    