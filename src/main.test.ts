/**
 * @vitest-environment jsdom
 */

import { beforeEach, expect, test } from 'vitest'
import { render } from './main';

let container: HTMLDivElement;

function mount() {
    const div = document.createElement('div');
    render(div);
    return div;
}

beforeEach(() => {
    container = mount();
})

test('should first', async () => {
    expect(container).toBeTruthy();

    // const nav = document.querySelector<HTMLButtonElement>('nav');
    // console.log('nav', nav);

    // expect(nav).toBeTruthy();
    // if(nav) {}
    // const viewNav = await within(nav!).findByTestId("view-navigate");
    // viewNav.click();

    // const routeSocket = document.querySelector<HTMLDivElement>('#route-socket');
    // const viewPage = await within(routeSocket!).findByTestId('view-page');

    // expect(viewPage).toContain('THIS IS THE VIEW PAGE');
})