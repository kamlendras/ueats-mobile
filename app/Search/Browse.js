import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { TouchableRipple } from "react-native-paper";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyComponent = () => (
  <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
  <View style={styles.panelBox}>
    <View style={styles.card}>
    <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
      <Card mode='outlined'>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Cake
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
      </TouchableRipple>
    </View>
    <View style={styles.card}>
    <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Pizza
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
      </TouchableRipple>
    </View>
  </View>
  <View style={styles.panelBox}>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Cake
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Pizza
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
  </View>
  <View style={styles.panelBox}>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Cake
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Pizza
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
  </View>
  <View style={styles.panelBox}>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Cake
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Pizza
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
  </View>
  <View style={styles.panelBox}>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Cake
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Pizza
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
  </View>
  <View style={styles.panelBox}>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Cake
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Pizza
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
  </View>
  <View style={styles.panelBox}>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Cake
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Pizza
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
  </View>
  <View style={styles.panelBox}>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Cake
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Pizza
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
  </View>
  <View style={styles.panelBox}>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Cake
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Pizza
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
  </View>
  <View style={styles.panelBox}>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Cake
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Pizza
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
  </View>
  <View style={styles.panelBox}>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Cake
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
    <View style={styles.card}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
          <Text style={styles.text} variant="titleLarge">
            Pizza
          </Text>
          {/* <Text variant="bodyMedium">Card content</Text> */}
        </Card.Content>
      </Card>
    </View>
  </View>

  </ScrollView>
);

export default MyComponent;

const styles = StyleSheet.create({
  panelBox: {
    paddingHorizontal: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    flexBasis: 2,
  },
  text: {
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    width: "50%",
    height: "100%",
    textAlign: "center",
    backgroundColor: "white",
    padding: 10,
    justifyContent: "space-between",
    overflow: "hidden",
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    height: "100%",
  },
  ripple:{
    zIndex: 100,
  }
});
