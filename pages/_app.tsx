import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MDXComponents } from 'mdx/types';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
