// import React from 'react';

// import './MainStyle';
// import { HashRouter } from 'react-router-dom';

// // See documentation for https://github.com/reactjs/react-redux.
// // This is how you get props from the Rails view into the redux store.
// // This code here binds your smart component to the redux store.
// const Main = (props) => (
//   <Provider store={configureStore(props)}>
//     <HashRouter hashType="hashbang">
//       <Layout />
//     </HashRouter>
//   </Provider>
// );

// export default Main;

import React from "react";
import Routes from "./routes/Index";

const Main = (props) => {
  console.log('chcking...')
  return (
    <>{Routes}</>
  );
}
export default Main;
