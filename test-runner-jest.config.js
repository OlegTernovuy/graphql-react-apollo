import { getJestConfig } from '@storybook/test-runner';

const defaultConfig = getJestConfig();

const config = {
        ...defaultConfig,
        snapshotResolver: './snapshot-resolver.js',
};

export default config;
