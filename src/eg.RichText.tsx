import { JSXMapSerializer, PrismicRichText, useSinglePrismicDocument } from '@prismicio/react';

import { Heading } from './eg.Heading';

const components: JSXMapSerializer = {
  heading1: ({ children }) => <Heading as="h2">{children}</Heading>
};

const App = () => {
  const [ home ] = useSinglePrismicDocument('home');

  return home
    ? <PrismicRichText field={home.data.body} components={components} />
    : null;
};

export default App;