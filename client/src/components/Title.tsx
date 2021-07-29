import React from 'react';

type TitleProps = {
  title: string,
};

const Title = ({ title } : TitleProps) => {
  return (
    <span>{title}</span>
  )
}

export default Title;
