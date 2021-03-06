import React from 'react';
import {navigateToUrl} from 'single-spa';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-W4JQ9BX',
  dataLayer: {
    userId: Date.now(),
    app: 'simulations-app',
  },
  dataLayerName: 'SimulationsDataLayer',
  events: {
    sendUserInfo: 'userInfo',
  },
};

const Step1 = () => (
  <div>
    Step 1 <Link to="/step2">proximo</Link>
  </div>
);

const Step2 = () => (
  <div>
    Step 2 <Link to="/step3">proximo</Link>
  </div>
);

const Step3 = () => (
  <div>
    Final
    <a
      href="/processamento"
      onClick={ev => {
        ev.preventDefault();
        navigateToUrl('/processamento');
      }}>
      Processamento
    </a>
  </div>
);

function App() {
  React.useEffect(() => {
    console.log('adiciona gTM');
    const dt = TagManager.initialize(tagManagerArgs);
    console.log(dt);
  }, []);

  return (
    <Router basename="simulacao">
      <h2>Simulations</h2>
      <Switch>
        <Route path="/" exact component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
      </Switch>
    </Router>
  );
}

export {App};
