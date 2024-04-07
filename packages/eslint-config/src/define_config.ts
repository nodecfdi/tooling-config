type FixedFlatAtomConfig = Omit<NodeCfdiFlatAtomConfig, 'plugins'> & {
  plugins?: Record<string, unknown> | null | undefined;
};
type FixedFlatArrayConfig = FixedFlatAtomConfig[];

type CorrectReturnType<TFlatConfig extends FixedFlatArrayConfig | FixedFlatAtomConfig> =
  TFlatConfig extends FixedFlatArrayConfig ? NodeCfdiFlatConfig : NodeCfdiFlatAtomConfig;

export type Rules = NodeCfdiFlatAtomConfig['rules'];

export const defineConfig = <T extends FixedFlatArrayConfig | FixedFlatAtomConfig>(
  fn: T,
): CorrectReturnType<T> => {
  return fn as CorrectReturnType<T>;
};
