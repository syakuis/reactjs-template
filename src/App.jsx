import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Todo = lazy(() => import('./todo/Todo'));
const TodoTs = lazy(() => import('./todo.ts/Todo'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              자바스크립트
            </Link>
            <Link className="navbar-brand" to="/typescript">
              타입스크립트
            </Link>
          </div>
        </nav>

        <Route path="/" exact component={props => <Todo {...props} />} />
        <Route path="/typescript" component={props => <TodoTs {...props} />} />
      </Suspense>
    </Router>
  );
};

export default App;
