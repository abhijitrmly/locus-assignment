/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './App.css';
import KeyboardShortcut from './utils/addons/keyboardShortcuts';
import ShortcutsContext from './store/ShortcutsContext';
import KeyboardShortcutList from './utils/addons/ShortcutList';

// A sample keyboard shortcut is displayed here
const App = () => {
  const [contextState, setContextState] = useState({});

  const initialValues = {
    shortcuts: contextState,
    changeShortcut: (value) => {
      if (JSON.stringify(contextState) !== JSON.stringify(value)) {
        setContextState(value);
      }
    },
  };

  return (
    <ShortcutsContext.Provider value={initialValues}>
      <KeyboardShortcut
        shortcutKeys="shift s"
        callback={() => {
          console.log('this is working');
        }}
      />
      <hr />
      <div>
        <KeyboardShortcutList />
      </div>
    </ShortcutsContext.Provider>
  );
};

export default App;
