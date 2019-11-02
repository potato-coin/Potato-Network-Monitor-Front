import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';
import React from 'react';

const bugsnagClient = bugsnag({
  apiKey: 'ac37bcc244f8c3350f531328df6302fb',
  notifyReleaseStages: ['production'],
});
bugsnagClient.use(bugsnagReact, React);

export default bugsnagClient;
