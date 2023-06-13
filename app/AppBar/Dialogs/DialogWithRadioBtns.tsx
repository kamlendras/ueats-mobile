import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  Button,
  Portal,
  Dialog,
  RadioButton,
  TouchableRipple,
} from 'react-native-paper';
import { TextComponent } from './DialogTextComponent';

type Props = {
  visible: boolean;
  close: () => void;
};

type CheckedState = 'English' | 'Hindi' | 'Gujarati' | 'Punjabi' | 'Marathi' | 'Kannada' | 'Telugu' | 'Bengali' | 'Tamil' | 'Malayalam' | 'Odia';

const DialogWithRadioBtns = ({ visible, close }: Props) => {
  const [checked, setChecked] = React.useState<CheckedState>('English');

  return (
    <Portal>
      <Dialog onDismiss={close} visible={visible}>
        <Dialog.Title>Select Language</Dialog.Title>
        <Dialog.ScrollArea style={styles.container}>
          <ScrollView>
            <View>
              <TouchableRipple onPress={() => setChecked('English')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="English"
                      status={checked === 'English' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                  English
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('Hindi')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="Hindi"
                      status={checked === 'Hindi' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                  हिंदी
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('Gujarati')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="Gujarati"
                      status={checked === 'Gujarati' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                  ગુજરાતી
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('Punjabi')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="Punjabi"
                      status={checked === 'Punjabi' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                  ਪੰਜਾਬੀ
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('Marathi')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="Marathi"
                      status={checked === 'Marathi' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                  मराठी
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('Kannada')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="Kannada"
                      status={checked === 'Kannada' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                  ಕನ್ನಡ
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('Telugu')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="Telugu"
                      status={checked === 'Telugu' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                  తెలుగు
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('Bengali')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="Bengali"
                      status={checked === 'Bengali' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                  বাংলা
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('Tamil')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="Tamil"
                      status={checked === 'Tamil' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                  தமிழ்
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('Malayalam')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="Malayalam"
                      status={checked === 'Malayalam' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                  മലയാളം
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('Odia')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="Odia"
                      status={checked === 'Odia' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                  ଓଡିଆ
                  </TextComponent>
                </View>
              </TouchableRipple>
             
            </View>
          </ScrollView>
        </Dialog.ScrollArea>
        <Dialog.Actions>
          <Button onPress={close}>Cancel</Button>
          <Button onPress={close}>Select</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogWithRadioBtns;

const styles = StyleSheet.create({
  container: {
    maxHeight: 270,
    paddingHorizontal: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    paddingLeft: 8,
  },
});

