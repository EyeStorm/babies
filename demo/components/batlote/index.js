import * as batlote from './export'
export * from './export';

export const ChildRoutes = [
  batlote.Chap01.route(),
  batlote.Chap02.route(),
  batlote.Chap03.route(),
  batlote.Chap04.route(),
  batlote.Chap05.route(),
  batlote.Chap06.route(),
  batlote.Chap07.route(),
  batlote.Chap08.route(),
  batlote.Chap09.route(),
  batlote.Chap10.route(),
  batlote.Chap11.route(),
  batlote.Chap12.route(),
  batlote.Chap13.route(),
  batlote.Chap14.route(),
  batlote.Chap15.route(),
  batlote.Chap16.route(),
  batlote.Chap17.route(),
  batlote.Chap18.route(),
  batlote.Chap19.route(),
  batlote.Chap20.route(),
  batlote.Chap21.route(),
  batlote.Chap22.route(),
  batlote.Chap23.route(),
  batlote.Chap24.route(),
  batlote.Chap25.route(),
];
export default ChildRoutes;
export const Routes = [
  batlote.Start.route(),
  ...ChildRoutes
];

// Menu build
export const Menu = {
  href: batlote.Start.route().path,
  title: batlote.Start.route().name,
  icon: 'fa fa-list-ul',
  child: ChildRoutes.map(route => {
    return {
      href: route.path,
      title: route.name,
      icon: 'fa fa-file-alt'
    }
  })
}
