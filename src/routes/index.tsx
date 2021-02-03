import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HelloWorld from '../pages/HelloWorld';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HelloWorld} />
  </Switch>
);

export default Routes;
