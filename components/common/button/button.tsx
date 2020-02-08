import React, { HTMLProps } from 'react';
import Styles from './styles';

type Props = {
  variant: string;
  className?: string;
  children: string;
  onClick: (e: React.SyntheticEvent) => void;
};

const Button = (props: Props & HTMLProps<HTMLButtonElement>) => {
  const { variant, className, children, onClick } = props;
  const variantClass = variant ? variant : 'primary';
  const concatClass = className || '';
  return (
    <button onClick={onClick} className={'ripple ' + variantClass + ' ' + concatClass}>
      {children || 'Button'}
      <div className={'active'} />
      <style jsx>{Styles}</style>
    </button>
  );
};

export default Button;
