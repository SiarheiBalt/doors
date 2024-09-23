import {useEffect} from "react";

export enum MouseEventType {
  click = "click",
  mousedown = "mousedown",
  mouseup = "mouseup"
}

export function useOnClickOutside(ref: any, mouseEvent: MouseEventType, handler: (event: MouseEvent) => void) {
  useEffect(
    () => {
      const listener = (event: MouseEvent) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener(mouseEvent, listener, true);
      return () => {
        document.removeEventListener(mouseEvent, listener, true);
      };
    },
    [ref, mouseEvent, handler]
  );
}

export const useTMPanelMove =
    (syncPanelsHeight: (movementY: number) => void, panelsContainerRef: any) => {
    const {removeEventListener, addEventListener} = document.body;

    const onMouseMove = (evt: any) => {
        const isLeftMouseButtonPressed = evt.buttons === 1;
        if (
            isLeftMouseButtonPressed &&
            panelsContainerRef.current.contains(evt.target)
        ) {
            syncPanelsHeight(evt.movementY);
        } else {
            removeEventListener("mousemove", onMouseMove);
        }
    }

    const onMouseDown = () => addEventListener("mousemove", onMouseMove);
    const onMouseUp = () => removeEventListener("mousemove", onMouseMove);

    return {onMouseDown, onMouseUp}
}
