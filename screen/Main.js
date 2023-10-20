import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";

import {
  Avatar,
  Badge,
  Banner,
  Button,
  Checkbox,
  Chip,
  Dialog,
  Portal,
  PaperProvider,
  HelperText,
  TextInput,
  List,
  Menu,
  Modal,
  ProgressBar,
  MD3Colors,
  RadioButton,
  TouchableRipple,
  IconButton,
  Tooltip,
  Switch ,
  Snackbar ,
  SegmentedButtons ,
  Appbar 
} from "react-native-paper";
export default function Main() {
 

  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [visibles, setVisibles] = React.useState(false);
  const [expanded, setExpanded] = React.useState(true);
  const [visibl, setVisibless] = React.useState(false);
  const [value, setValue] = React.useState("first");
  const showModal = () => setVisibless(true);
  const hideModal = () => setVisibless(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const [visible1, setVisible1] = React.useState(false);

  const onToggleSnackBar = () => setVisible1(!visible);

  const onDismissSnackBar = () => setVisible1(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const containerStyle = { backgroundColor: "white", padding: 20 };
  const handlePress = () => setExpanded(!expanded);
  const showDialog = () => setVisibles(true);

  const hideDialog = () => setVisibles(false);
  const [text, setText] = React.useState("");

  const onChangeText = (text) => setText(text);

  const hasErrors = () => {
    return !text.includes("@");
  };
  return (
    <View style={styles.container}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
        <Snackbar
        visible={visible1}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
         
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
          <Banner
            visible={visible}
            actions={[
              {
                label: "Fix it",
                onPress: () => setVisible(false),
              },
              {
                label: "Learn more",
                onPress: () => setVisible(false),
              },
            ]}
            icon={({ size }) => (
              <Image
                source={{
                  uri: "https://avatars3.githubusercontent.com/u/17571969?s=400&v=4",
                }}
                style={{
                  width: size,
                  height: size,
                }}
              />
            )}
          >
            There was a problem processing a transaction on your credit card.
          </Banner>
          <ScrollView>
            <View style={styles.content}>
              <Text style={styles.text}>Avatar</Text>
              <View style={styles.contents}>
                <Avatar.Icon size={54} icon="heart" />
                <Avatar.Image
                  size={54}
                  source={require("../assets/favicon.png")}
                />
                <Avatar.Text size={54} label="Hi" />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Badge</Text>
              <View style={styles.contents}>
                <Badge size={30}>3</Badge>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Banner</Text>
              <View style={styles.contents}>
                <Button
                  mode="contained"
                  onPress={() => {
                    setVisible(true);
                  }}
                >
                  Press me
                </Button>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Checkbox</Text>
              <View style={styles.contents}>
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Chip</Text>
              <View style={styles.contents}>
                <Chip icon="information" onPress={() => console.log("Pressed")}>
                  Example Chip
                </Chip>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Dialog</Text>
              <View style={styles.contents}>
                <Button mode="outlined" onPress={showDialog}>
                  Show Dialog
                </Button>
              </View>
            </View>
            <Portal>
              <Dialog visible={visibles} onDismiss={hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                  <Text variant="bodyMedium">This is simple dialog</Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
            <View style={styles.content}>
              <Text style={styles.text}>List</Text>
              <View style={styles.contents}>
                <List.Section title="Accordions">
                  <List.Accordion
                    title="Uncontrolled Accordion"
                    left={(props) => <List.Icon {...props} icon="folder" />}
                  >
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                  </List.Accordion>

                  <List.Accordion
                    title="Controlled Accordion"
                    left={(props) => <List.Icon {...props} icon="folder" />}
                    expanded={expanded}
                    onPress={handlePress}
                  >
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                  </List.Accordion>
                </List.Section>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.text}>Menu</Text>
              <View style={styles.contentss}>
                <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
                <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
                <Menu.Item
                  leadingIcon="content-cut"
                  onPress={() => {}}
                  title="Cut"
                  disabled
                />
                <Menu.Item
                  leadingIcon="content-copy"
                  onPress={() => {}}
                  title="Copy"
                  disabled
                />
                <Menu.Item
                  leadingIcon="content-paste"
                  onPress={() => {}}
                  title="Paste"
                />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>HelperText</Text>
              <View style={styles.contents1}>
                <TextInput
                  label="Email"
                  value={text}
                  onChangeText={onChangeText}
                />
                <HelperText type="error" visible={hasErrors()}>
                  Email address is invalid!
                </HelperText>
              </View>
            </View>
            <Portal>
              <Modal
                visible={visibl}
                onDismiss={hideModal}
                contentContainerStyle={containerStyle}
              >
                <Text>Example Modal. Click outside this area to dismiss.</Text>
              </Modal>
            </Portal>

            <View style={styles.content}>
              <Text style={styles.text}>Modal</Text>
              <View style={styles.contents}>
                <Button mode="outlined" onPress={showModal}>
                  Show Modal
                </Button>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>ProgressBar</Text>

              <View style={styles.contents}>
                <RadioButton.Group
                  onValueChange={(value) => setValue(value)}
                  value={value}
                >
                  <RadioButton.Item label="First item" value="first" />
                  <RadioButton.Item label="Second item" value="second" />
                </RadioButton.Group>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.text}>ProgressBar</Text>

              <View style={styles.contents}>
                <RadioButton.Group
                  onValueChange={(value) => setValue(value)}
                  value={value}
                >
                  <RadioButton.Item label="First item" value="first" />
                  <RadioButton.Item label="Second item" value="second" />
                </RadioButton.Group>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.text}>TextInput</Text>

              <View style={styles.contents}>
                <TextInput
                  label="Password"
                  secureTextEntry
                  right={<TextInput.Icon icon="eye" />}
                />
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.text}>Tooltip</Text>

              <View style={styles.contents}>
                <Tooltip title="Selected Camera">
                  <IconButton
                    icon="camera"
                    selected
                    size={24}
                    onPress={() => {}}
                  />
                </Tooltip>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.text}>TouchableRipple</Text>

              <View style={styles.contents}>
                <TouchableRipple
                  onPress={() => console.log("Pressed")}
                  rippleColor="rgba(0, 0, 0, .32)"
                >
                  <Text>Press anywhere</Text>
                </TouchableRipple>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.text}>Switch</Text>

              <View style={styles.contents}>
              <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.text}>Snackbar</Text>

              <View style={styles.contents}>
              <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.text}>SegmentedButtons</Text>

              <View style={styles.contents1}>
              <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]}
      />
              </View>
            </View>

          </ScrollView>
        </View>
      </PagerView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
  },
  content: {
    borderWidth: 0.5,
    alignItems: "center",
    padding: 15,
    flexDirection: "column",
    borderColor: "black",
  },
  text: {
    fontSize: 20,
    backgroundColor: '#21005d',
    width: '100%',
    textAlign: 'center',
    color: 'white'
  },
  contents: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
  },
  contents1: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
    alignItems: 'center'
  },
  contents1: {
    flexDirection: "column",
    padding: 10,
    gap: 10,
    width: "100%",
    justifyContent: "center",
  },
  viewPager: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  contentss: {
    flexDirection: "column",
    padding: 10,
  },
});
