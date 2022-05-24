export const Heading = (
  { as: Comp = 'h1', children }: { as: React.ComponentType | string; children: JSX.Element[]; }
) => <Comp>{children}</Comp>;
