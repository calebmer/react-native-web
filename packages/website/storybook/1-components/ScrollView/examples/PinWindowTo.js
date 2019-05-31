import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Switch } from 'react-native';

export default class PinWindowTo extends React.PureComponent {
  state = {
    pinWindowToBottom: true,
    height: 150,
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  };

  handlePinWindowToBottomChange = pinWindowToBottom => {
    this.setState({ pinWindowToBottom });
  };

  handleAddRowToTop = () => {
    this.setState(prevState => ({ items: [prevState.items.length + 1, ...prevState.items] }));
  };

  handleAddRowToBottom = () => {
    this.setState(prevState => ({ items: [...prevState.items, prevState.items.length + 1] }));
  };

  handleGrow = () => {
    this.setState(prevState => ({ height: prevState.height + 16 }));
  };

  handleShrink = () => {
    this.setState(prevState => ({ height: prevState.height - 16 }));
  };

  render() {
    return (
      <View style={styles.scrollViewContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContentContainerStyle}
          pinWindowTo={this.state.pinWindowToBottom ? 'bottom' : 'top'}
          style={[styles.scrollViewStyle, { height: this.state.height }]}
        >
          {this.state.items.map(item => (
            <View key={item} style={styles.box}>
              <Text>{item}</Text>
            </View>
          ))}
        </ScrollView>
        <View>
          <View style={styles.switch}>
            <Text style={styles.switchLabel}>pinWindowToBottom: </Text>
            <Switch
              onValueChange={this.handlePinWindowToBottomChange}
              value={this.state.pinWindowToBottom}
            />
          </View>
          <View style={styles.spacer} />
          <Button onPress={this.handleAddRowToTop} title="add to top" />
          <View style={styles.spacer} />
          <Button onPress={this.handleAddRowToBottom} title="add to bottom" />
          <View style={styles.spacer} />
          <Button onPress={this.handleGrow} title="grow" />
          <View style={styles.spacer} />
          <Button onPress={this.handleShrink} title="shrink" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flexGrow: 1,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderWidth: 1,
    marginBottom: -1
  },
  scrollViewContainer: {
    flexDirection: 'row'
  },
  scrollViewStyle: {
    borderWidth: 1,
    marginRight: 20
  },
  scrollViewContentContainerStyle: {
    backgroundColor: '#eee',
    padding: 11
  },
  spacer: {
    height: 10
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  switch: {
    flexDirection: 'row'
  },
  switchLabel: {
    fontFamily: 'monospace'
  }
});
