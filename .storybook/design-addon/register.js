//.storybook/design-addon/register.js
import { addons, types } from '@storybook/addons';
import {
  IconButton,
  Icons,
  TooltipLinkList,
  WithTooltip,
} from '@storybook/components';
import React, { Fragment } from 'react';

const Content = () => {
  const items = [
    {
      title: 'None',
      url: '',
    },
    {
      title: 'Bootstrap',
      url:
        'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
    },
  ];

  const toLinks = (items, close) => {
    return items.map((i) => ({
      id: i.title,
      title: i.title,
      onClick: () => {
        sessionStorage.setItem('themeUrl', i.url);
        document
          .getElementById('storybook-preview-iframe')
          .contentDocument.getElementById('stylesheet').href = i.url;
        close();
      },
    }));
  };

  return (
    <Fragment>
      <WithTooltip
        placement="top"
        trigger="click"
        tooltip={({ onHide }) => (
          <TooltipLinkList links={toLinks(items, onHide)} />
        )}
      >
        <IconButton key="background" title="Choose a css theme">
          <Icons icon="paintbrush" />
        </IconButton>
      </WithTooltip>
    </Fragment>
  );
};

addons.register('design-addon', () => {
  addons.add('design-addon/panel', {
    title: 'Theme',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => (
      <Fragment>
        <Content />
      </Fragment>
    ),
  });
});
