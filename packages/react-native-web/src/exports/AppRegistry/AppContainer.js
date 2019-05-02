/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import StyleSheet from '../StyleSheet';
import View from '../View';
import { any, node } from 'prop-types';
import React, { Component, type ComponentType } from 'react';
import RootTagContext from './RootTagContext';

type Context = {
  rootTag: any
};

type Props = {
  WrapperComponent?: ?ComponentType<*>,
  // $FlowFixMe
  children?: React.Children,
  rootTag: any
};

type State = {
  mainKey: number
};

export default class AppContainer extends Component<Props, State> {
  state = { mainKey: 1 };

  static propTypes = {
    WrapperComponent: any,
    children: node,
    rootTag: any.isRequired
  };

  render() {
    const { children, WrapperComponent } = this.props;
    let innerView = (
      <View
        children={children}
        key={this.state.mainKey}
        pointerEvents="box-none"
        style={styles.appContainer}
      />
    );

    if (WrapperComponent) {
      innerView = <WrapperComponent>{innerView}</WrapperComponent>;
    }

    return (
      <RootTagContext.Provider value={this.props.rootTag}>
        <View pointerEvents="box-none" style={styles.appContainer}>
          {innerView}
        </View>
      </RootTagContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});
