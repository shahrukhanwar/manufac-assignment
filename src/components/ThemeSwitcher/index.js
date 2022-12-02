import React from 'react';

const ThemeSwitcher = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '8px 16px',
      }}
    >
      <span style={{ marginRight: '4px' }}>Light</span>
      <label class="switch">
        <input
          type="checkbox"
          value={isDarkTheme}
          onChange={(e) => setIsDarkTheme(e.target.checked)}
        />
        <span class="slider"></span>
      </label>
      <span style={{ marginLeft: '4px' }}>Dark</span>
    </div>
  );
};

export default ThemeSwitcher;
