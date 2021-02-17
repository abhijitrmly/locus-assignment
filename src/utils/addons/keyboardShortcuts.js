/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Keypress from 'keypress.js';

import ShortcutsContext from '../../store/ShortcutsContext';

const KeyboardShortcut = (props) => {
  const { shortcutKeys, callback } = props;
  const contextValues = React.useContext(ShortcutsContext);

  const { shortcuts, changeShortcut } = contextValues;

  const listener = new Keypress.Listener();
  const listenerUpdateResponse = listener.simple_combo(shortcutKeys, callback);
  const { count, keys } = listenerUpdateResponse;
  changeShortcut({ ...shortcuts, [count]: keys });

  // @TODO replace div with an alert for showing that the shortcut has been registered
  return (
    <div>{shortcutKeys}</div>
  );
};

export default KeyboardShortcut;
