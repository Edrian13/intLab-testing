type ModsType = Record<string, boolean | string>;

export const classNames = (
  className: string,
  mods: ModsType = {},
  additionally: string[] = []
) => {
  return [
    className,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additionally,
  ].join(' ');
};
