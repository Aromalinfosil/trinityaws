
import React, { useState } from 'react';
function Team() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
      setIsDarkMode(!isDarkMode);
      if (!isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
  return (
    <button onClick={handleToggle}>
    {isDarkMode ? 'Light Theme' : 'Dark Theme'}
  </button>
  )
}

export default Team