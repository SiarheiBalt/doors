"use client"
import React, {FC, useRef} from 'react';
import cl from './modal.module.css'
import {MouseEventType, useOnClickOutside} from "../../../hooks/event";
import DelLogo from "./images/delete.svg";

type ModalProps = {
  content: any,
  title?: string | undefined,
  onClose?: () => void | undefined,
}

const Modal:FC<ModalProps> = ({content, title, onClose}) => {
  const containerRef = useRef<any>()

  useOnClickOutside(containerRef, MouseEventType.mouseup, () => onClose && onClose())

  return (
    <div className={cl.wrapper}>
      <div className={cl.container} ref={containerRef}>
        <div className={cl.header}>
          <span className={cl.title}>{title || ""}</span>
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
