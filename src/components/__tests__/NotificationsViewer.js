import React from 'react';
import renderer from 'react-test-renderer';
import NotificationsViewer from '../NotificationsViewer';

jest.mock('../../services/NotificationsService');
const notificationsService = require('../../services/NotificationsService').default;

notificationsService.default = jest.fn();

describe('The notification viewer', () => {
  beforeAll(() => {
    notificationsService.default.mockClear();
    notificationsService.__setCount(42);
  });

  it('Should display the correct number of notifications', async() => {
    const tree = renderer.create(<NotificationsViewer />);

    await Promise.resolve();

    const instance = tree.root;
    const component = instance.findByProps({className: `notifications`});
    const text = component.children[0];

    expect(text).toEqual('42 Notifications Awaiting!');
  });
})
