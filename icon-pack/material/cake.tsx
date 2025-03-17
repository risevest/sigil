import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 7C13.11 7 14 6.1 14 5C14 4.62 13.9 4.27 13.71 3.97L12 1L10.29 3.97C10.1 4.27 10 4.62 10 5C10 6.1 10.9 7 12 7ZM18 10H13V8H11V10H6C4.34 10 3 11.34 3 13V22C3 22.55 3.45 23 4 23H20C20.55 23 21 22.55 21 22V13C21 11.34 19.66 10 18 10ZM19 21H5V18C5.9 17.99 6.76 17.63 7.4 16.99L8.49 15.92L9.56 16.99C10.87 18.3 13.15 18.29 14.45 16.99L15.53 15.92L16.6 16.99C17.24 17.63 18.1 17.99 19 18V21ZM19 16.5C18.49 16.49 18.01 16.3 17.65 15.93L15.52 13.8L13.38 15.93C12.64 16.67 11.35 16.67 10.61 15.93L8.48 13.8L6.34 15.93C5.99 16.29 5.51 16.49 5 16.5V13C5 12.45 5.45 12 6 12H18C18.55 12 19 12.45 19 13V16.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Cake'

/**
 * Material Icon: Cake
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cake Material Icon Docs}
 */
export const Cake = memo(Icon)
