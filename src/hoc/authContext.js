import React from 'react';
const authContext = React.createContext({
    authenticated: false,
    controlCart: () => { }
});
export default authContext;