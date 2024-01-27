import IconBase from "../components/IconBase";
import { IconBaseProps, IconTree } from "../components/types";
import tree2Element from "./tree2Element";

const createSvgElement = (tree: IconTree) => (props: IconBaseProps) =>
  (
    <IconBase attr={tree.attr} {...props}>
      {tree2Element(tree.child)}
    </IconBase>
  );

export default createSvgElement;
