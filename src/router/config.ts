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
];

export default routes;
