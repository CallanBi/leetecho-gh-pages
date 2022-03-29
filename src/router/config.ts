const routes = [
  {
    path: ['/', '/home'],
    exact: true,
    component: 'Home',
  },
  {
    path: ['/docs'],
    exact: true,
    component: 'Documents',
  },
  {
    path: ['/questions'],
    exact: true,
    component: 'CommonQuestions',
  },
  {
    path: ['/iterationPlan'],
    exact: true,
    component: 'IterationPlan',
  },
  {
    path: ['/changelog'],
    exact: true,
    component: 'Changelog',
  },
];

export default routes;
