import EmberRouter from '@ember/routing/router';
import config from './config/environment';

// eslint-disable-next-line ember/no-classic-classes -- TODO: Modernize
const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
});

export default Router;
