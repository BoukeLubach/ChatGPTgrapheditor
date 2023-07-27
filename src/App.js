import logo from './logo.svg';
import './App.css';

// React Required
import React, { Component } from 'react';

// Blocks Layout
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SidebarResponsive from './components/sidebar/SidebarResponsive';


// import PrivateRoute from './components/common/PrivateRoute';
// import PageScrollTop from './components/common/PageScrollTop';



// pages  
import Home from './pages/Home';
import ChatBot from './pages/chat/gptAPIwindow';

function App() {
  return (
    <BrowserRouter basename={'/'}>
          {/* <PageScrollTop> */}
            <Switch>

              <Route exact path={`${process.env.PUBLIC_URL}/home`} component={Home} />
              

              <SidebarResponsive>
                {/* <Route exact path={`${process.env.PUBLIC_URL}/graph`} component={GraphBuilder} />
                <Route exact path={`${process.env.PUBLIC_URL}/grapheditor`} component={GraphEditor} />
                <Route exact path={`${process.env.PUBLIC_URL}/chat`} component={gptAPIwindow} /> */}
                <Route exact path={`${process.env.PUBLIC_URL}/chat`} component={ChatBot} />
              </SidebarResponsive> 
            </Switch>

          {/* </PageScrollTop> */}
        </BrowserRouter>
  );
}

export default App;
