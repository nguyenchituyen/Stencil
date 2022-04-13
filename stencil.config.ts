import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'dialog',
  // globalStyle: 'src/global/global.css',
  outputTargets: [
    // react({
    //   componentCorePackage: 'react-stencil-ds',
    //   proxiesFile: '../React/demo/src/components/stencil-generated/index.ts',
    //   includeDefineCustomElements: true,
    // }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
