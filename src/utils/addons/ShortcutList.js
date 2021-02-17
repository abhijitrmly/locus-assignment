/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Keypress from 'keypress.js';

import ShortcutsContext from '../../store/ShortcutsContext';

const KeyboardShortcutList = () => {
  const contextValues = React.useContext(ShortcutsContext);

  const { shortcuts } = contextValues;

  const listener = new Keypress.Listener();

  const deleteEntry = (shortcutValue) => {
    // @TODO this needs to be fixed, it cannot unregister with combo
    listener.unregister_combo(shortcutValue.join(' '));
  };

  return (
    <div>
      {Object.entries(shortcuts).map(
        ([, shortcutValue]) => (
          <button
            type="button"
            onClick={() => { deleteEntry(shortcutValue); }}
          >
            {`Unregister ${shortcutValue}`}
          </button>
        ),
      )}
    </div>
  );
};

export default KeyboardShortcutList;
