import React from 'react'
import LazyLoad from 'react-lazyload'

type LazyImageProps = {
  src?: string,
  resize?: boolean,
  placeholder?: React.ReactElement|React.ReactHTMLElement<any>,
  height?: string | number,
  scroll?: boolean
}
export const LazyImage: React.FC<LazyImageProps> = ({ src, placeholder, resize, height, scroll }) => {
  return (
    <LazyLoad height={height} resize={resize} placeholder={placeholder} scroll={scroll}>
      <img src={src} alt={src} />
    </LazyLoad>
  )
}
LazyImage.defaultProps = {
  resize: true,
  scroll: false,
  placeholder: <img src="https://via.placeholder.com/150x150" alt="150" />
}
export default LazyImage
