import React, {Dispatch} from 'react';
import cl from './input.module.css';
import cs from "classnames";

type InputProps = {
  value: string,
  autoFocus?: boolean,
  customClass?: string,
  onBlur?: any,
  setValue: Dispatch<any>,
  placeholder?: string,
  type?: string,
  disabled?: boolean
}

const Input: React.FC<InputProps> = ({
                                       value,
                                       setValue,
                                       autoFocus,
                                       customClass,
                                       onBlur,
                                       placeholder,
                                       type = "text",
                                       disabled = false
                                     }) => {

  const onHandleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value)
  }

  const classes = cs(cl.input, customClass && customClass)

  return (
    <input className={classes}
           value={value}
           onChange={onHandleChange}
           autoFocus={autoFocus}
           type={type}
           onBlur={onBlur}
           placeholder={placeholder}
           disabled={disabled}/>
  );
};

export default Input;
