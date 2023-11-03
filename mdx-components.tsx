import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const header_styles = { // Applys to h1, h2, h3, ...
  fontWeight: '700',
  paddingTop: '1.8rem',
  letterSpacing: '0.0125em',
  marginBlock: '1rem',
  display: 'block',
  // fontSize: '2.5em',
  lineHeight: 'calc(1em + (1 / 2.5 * 1ex))'
}

const h1_styles = { // Applys to h1, h2, h3, ...
  fontSize: '2.5em'
}

const h2_styles = { // Applys to h1, h2, h3, ...
  fontSize: '2.0em'
}
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={
      {...header_styles, ...h1_styles}
    }>{children}</h1>,

    h2: ({ children }) => <h2 style={
      {...header_styles, ...h2_styles}
    }>{children}</h2>,

    pre: ({children}) => <pre style={
        {
            backgroundColor: '#3c3d55', // Pale yellow: #FFE9AB, Dark slate: #3c3d55 ,
            fontFamily: 'var(--consolas)',
            fontSize: 'inherit',
            fontFeatureSettings: 'normal',
            lineHeight: 'calc(1em + (1 / 0.8 * 1ex))',
            wordWrap: 'normal',
            display: 'block',
            wordBreak: 'normal',
            overflow: 'auto'
        }
    }>{children}</pre>,

    code: ({children}) => <code style={
      {
         
          backgroundColor: '#3c3d55',
          fontFeatureSettings: 'normal',
          fontSize: 'larger',
          fontFamily: 'monospace',
          borderRadius: '10px',
          paddingBlock: 'calc(0.33 * (1 / 0.8 * 1ex))',
          paddingInline: 'calc(0.66 * (1 / 0.8 * 1ex))',
          wordBreak: 'normal',
          wordWrap: 'normal',
          overflow: 'auto'  
      }
    } className='dark:bg-red-700'>{children}</code>,

    p: ({ children }) => <p style={
      {
          fontWeight: '100',
          fontFamily: 'Georgia',
          fontSize: 'larger',
          // color: '#404041', // Commenting this out allows for dark mode color switch
          paddingTop: '1rem',
          paddingBottom: '1rem'
      }
    }>{children}</p>,

      ...components,
    }
}

/*

display: block;
  padding: calc(1em + 1ex) !important;
  white-space: pre;
  word-break: normal;
  overflow-x: auto;
  word-wrap: normal;

  mask-image: paint(squircle);
  --squircle-radius: 10px;
  border-radius: 10px;

*/