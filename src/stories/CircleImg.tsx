import React from 'react';
import './circle-img.css';

export interface circleImgProps {
  /**
   * How large should the img be?
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Img: React.FC<circleImgProps> = ({
  size = 'medium',
  ...props
}) => {
  return (
        <img src="" className="circle-img" alt="" />
        
  );
};
