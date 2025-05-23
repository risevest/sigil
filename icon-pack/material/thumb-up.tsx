import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 22H18C18.83 22 19.54 21.5 19.84 20.78L22.86 13.73C22.95 13.5 23 13.26 23 13V11C23 9.9 22.1 9 21 9H14.69L15.64 4.43L15.67 4.11C15.67 3.7 15.5 3.32 15.23 3.05L14.17 2L7.58 8.59C7.22 8.95 7 9.45 7 10V20C7 21.1 7.9 22 9 22ZM9 10L13.34 5.66L12 11H21V13L18 20H9V10ZM1 10H5V22H1V10Z" />
    </Svg>
  )
}

Icon.displayName = 'ThumbUp'

/**
 * Material Icon: Thumb Up
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:thumb_up Material Icon Docs}
 */
export const ThumbUp = memo(Icon)
