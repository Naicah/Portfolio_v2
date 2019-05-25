import { useRef, useEffect } from "react";

export const componentLocations = {};

export function useElementLocation() {
  const body_top = document.body.getBoundingClientRect().top;

  const anchorElement = useRef(null);

  useEffect(() => {
    const element = anchorElement.current;

    componentLocations[element.id] =
      element.getBoundingClientRect().top - body_top;
  });

  return anchorElement;
}
