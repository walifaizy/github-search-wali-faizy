import React, { HTMLProps } from 'react';
import Styles from './styles';

type Props = {
  variant: string;
  className?: string;
  children: string;
  disabled?: boolean;
  onClick: (e: React.SyntheticEvent) => void;
};

const Button = (props: Props & HTMLProps<HTMLButtonElement>) => {
  const { variant, className, children, onClick, disabled } = props;
  const variantClass = 'blue';
  const concatClass = className || '';
  return (
    <button disabled={disabled} onClick={onClick} className={'ripple ' + variantClass + ' ' + concatClass}>
      {children || 'Button'}
      <div className={'active'} />
      <style jsx>{Styles}</style>
    </button>
  );
};

export default Button;
