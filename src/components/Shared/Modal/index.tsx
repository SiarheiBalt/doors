"use client"
import React, {FC, useRef} from 'react';
import cl from './modal.module.css'
import {MouseEventType, useOnClickOutside} from "../../../hooks/event";
import DelLogo from "./images/delete.svg";

type ModalProps = {
  content: any,
  title?: string | undefined,
  onClose?: () => void | undefined,
  isCloseOutside: boolean | undefined
}

const Modal:FC<ModalProps> = ({content, title, onClose, isCloseOutside= true}) => {
  const containerRef = useRef<any>()

  useOnClickOutside(containerRef, MouseEventType.mouseup, () => (onClose && isCloseOutside) && onClose())

  return (
    <div className={cl.wrapper}>
      <div className={cl.container} ref={containerRef}>
        <div className={cl.header}>
          <span className={cl.title}>{title || ""}</span>
          {/*// eslint-disable-next-line*/}
          {onClose && <img
              src={DelLogo.src}
              className={cl.closeIco}
              onClick={() => onClose && onClose()}
          />}
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
