export type Rules = NodeCfdiFlatAtomConfig['rules'] | Record<string, string>;

type FixedFlatAtomConfig = Omit<NodeCfdiFlatAtomConfig, 'plugins' | 'rules'> & {
  plugins?: Record<string, unknown> | null | undefined;
  rules?: Rules;
};

type FixedFlatArrayConfig = FixedFlatAtomConfig[];

type CorrectReturnType<TFlatConfig extends FixedFlatArrayConfig | FixedFlatAtomConfig> =
  TFlatConfig extends FixedFlatArrayConfig ? NodeCfdiFlatConfig : NodeCfdiFlatAtomConfig;

export const defineConfig = <T extends FixedFlatArrayConfig | FixedFlatAtomConfig>(
  fn: T,
): CorrectReturnType<T> => {
  return fn as CorrectReturnType<T>;
};
