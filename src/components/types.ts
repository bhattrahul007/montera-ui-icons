export interface IconTree {
  id?: string;
  tag: string;
  attr: { [key: string]: string };
  child: IconTree[];
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export interface IconContextProps {
  color?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
  attr?: React.SVGAttributes<SVGElement>;
}
