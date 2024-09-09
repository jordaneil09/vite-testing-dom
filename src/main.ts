import { navigate, Route } from './navigation.ts';
import ViewPageComponent from './page/view/view.ts';

const ROUTE: Route[] = [
  {
    path: 'view',
    component: ViewPageComponent
  }
]

export const render = (parent: HTMLDivElement) => {
  if(!parent) return;

  parent.innerHTML = `
    <nav>
      <button id="view-navigate" data-testid="view-navigate" type="button">NAVIGATE TO VIEW</button>
    </nav>

    <div id="route-socket"></div>
  `;

  // document.querySelector<HTMLButtonElement>('#view-navigate')?.addEventListener('click', () => {
  //   navigate(ROUTE[0])
  // });
}

render(document.querySelector<HTMLDivElement>('#app')!);
