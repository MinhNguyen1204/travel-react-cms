interface Window {}

interface String {
  injectParams: <T>(params: T) => string;
  capitalize: () => string;
}

type TChildren = React.ReactNode;
type ObjectDynamicValue<T> = {
  [key: string]: T;
};
