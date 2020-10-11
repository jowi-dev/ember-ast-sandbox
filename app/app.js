import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import { modulePrefix, podModulePrefix } from 'mule-ember/config/environment';

export default class App extends Application {
  modulePrefix = modulePrefix;
  podModulePrefix = podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, modulePrefix);
