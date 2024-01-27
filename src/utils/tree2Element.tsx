import React, { createElement, useId } from "react";
import { IconTree } from "../components/types";

const tree2Element = (data?: IconTree[]): React.ReactNode => {
  if (data && Array.isArray(data) && data.length > 0) {
    const composeIdWithData = data.map((node) => {
      if (node["id"] === undefined) node["id"] = useId();
      return node;
    });

    return composeIdWithData.map((node) =>
      createElement(
        node.tag,
        {
          key: node.id,
          ...node.attr,
        },
        tree2Element(node.child)
      )
    );
  }
  return null;
};

export default tree2Element;
