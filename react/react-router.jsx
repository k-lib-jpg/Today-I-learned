// main.jsx
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// App.jsx
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Top from './components/Top';
import Login from './components/Login';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Top} />
        <Route path='/login' component={Login} />
        <Route path='/todo' component={TodoList} />
      </Switch>
      <Link to='/'>Back To Top</Link>
    </BrowserRouter>
  );
};

export default App;

