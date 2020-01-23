import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

type LazyImageProps = {
  src?: string,
  placeholder?: React.ReactElement|React.ReactHTMLElement<any>,
  height?: string | number,
  alt?: string
}
export const LazyImage: React.FC<LazyImageProps> = ({ src, placeholder, alt, height }) => {
  const newSrc = src ? `${src}?param=200y200` : ''
  return (
    <LazyLoadImage
      height={height}
      placeholderSrc={'https://via.placeholder.com/150x150'}
      placeholder={placeholder}
      alt={alt}
      src={newSrc}
    />  
  )
}
LazyImage.defaultProps = {
  placeholder: <img src="https://via.placeholder.com/150x150" alt="placeholder" />,
}
export default LazyImage
