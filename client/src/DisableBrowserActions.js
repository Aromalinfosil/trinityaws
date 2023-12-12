// import React, { useEffect } from 'react';

// const DisableBrowserActions = () => {
//   useEffect(() => {
//     // Disable right-click context menu
//     document.addEventListener('contextmenu', (e) => e.preventDefault());

//     // Function to check if Ctrl + Shift + Key combination is pressed
//     function ctrlShiftKey(e, keyCode) {
//       return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
//     }

//     // Disable certain keyboard shortcuts
//     document.onkeydown = (e) => {
//       if (
//         e.keyCode === 123 || // F12
//         ctrlShiftKey(e, 'I') || // Ctrl + Shift + I
//         ctrlShiftKey(e, 'J') || // Ctrl + Shift + J
//         ctrlShiftKey(e, 'C') || // Ctrl + C
//         (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) // Ctrl + U
//       ) {
//         e.preventDefault();
//         return false;
//       }
//     };
//   }, []);

//   return (
//     <div>
//       {/* Your React component content goes here */}
//     </div>
//   );
// };

// export default DisableBrowserActions;
