import { DefaultContext, IconContext } from "./context";
import { IconBaseProps, IconContextProps } from "./types";

const IconBase = (props: IconBaseProps & { attr: React.SVGAttributes<SVGElement> }) => {
  const element = (context: IconContextProps) => {
    const { color, size, title, attr, ...svgProps } = props;

    const computedSize = size || context.size;

    let className = context.className;
    if (svgProps.className) {
      className = className ? `${svgProps.className} ${className}` : svgProps.className;
      delete svgProps["className"];
    }

    return (
      <svg
        role="img"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        {...context.attr}
        {...attr}
        {...svgProps}
        className={className}
        style={{
          color: props.color || context.color,
          ...context.style,
          ...props.style,
        }}
        height={computedSize}
        width={computedSize}
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
    );
  };

  return IconContext !== undefined ? (
    <IconContext.Consumer>{(context) => element(context)}</IconContext.Consumer>
  ) : (
    element(DefaultContext)
  );
};

export default IconBase;
