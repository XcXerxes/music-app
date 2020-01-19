/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module 'react-ionicons/lib/IosSettingsOutline'
declare module 'react-ionicons/lib/IosMailOutline'
declare module 'react-ionicons/lib/IosShirtOutline'
declare module 'react-ionicons/lib/IosBrowsersOutline'
declare module 'react-ionicons/lib/IosSearchOutline'
declare module 'react-ionicons/lib/IosMusicalNoteOutline'
declare module 'react-ionicons/lib/IosHeadsetOutline'
declare module 'react-ionicons/lib/IosDownloadOutline'
declare module 'react-ionicons/lib/IosHeartOutline'
declare module 'react-ionicons/lib/IosPlayOutline'
declare module 'react-ionicons/lib/IosMusicalNotesOutline'
declare module 'react-ionicons/lib/IosContactsOutline'
declare module 'react-ionicons/lib/IosArrowForward'
declare module 'xerxes-react-carousel'
declare module 'react-ionicons/lib/IosArrowDroprightCircle'
declare module 'react-ionicons/lib/IosPlay'
declare module 'react-ionicons/lib/MdArrowDroprightCircle'
declare module 'react-ionicons/lib/IosLinkOutline'
