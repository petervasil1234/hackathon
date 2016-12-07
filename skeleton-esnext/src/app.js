export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
	  { route:  'hellow world', name: 'hello-world',      moduleId: 'hello-world',      nav: true, title: 'Hello world' },
	  { route:  'chat', name: 'chat',      moduleId: 'chat',      nav: true, title: 'Chat' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
