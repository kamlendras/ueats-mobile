import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from "./Home";
import Search from "./Search";
import Cart from "./Cart";
import Menu from "./Menu";
import Scan from "./Scan";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const HomeRoute = () => <Home/>;

const SearchRoute = () => <Search/>;
const CartRoute = () => <Cart/>;

const ScanRoute = () => <Scan/>;


const MenuRoute = () => <Menu/>;

const BN = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: ({ size, color }) => <MaterialIcons name="home-filled" size={size} color={color} />,  },
    { key: 'search', title: 'Search', focusedIcon: ({ size, color }) => <FontAwesome name="search" size={size} color={color} />, },
    { key: 'cart', title: 'Cart', focusedIcon: 'cart', unfocusedIcon: 'cart-outline' },
    { key: 'scan', title: 'Scan', focusedIcon: 'qrcode-scan', },
    { key: 'menu', title: 'Menu', focusedIcon: 'menu', },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    cart: CartRoute,
    scan: ScanRoute,
    menu: MenuRoute,

  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
export default BN;

