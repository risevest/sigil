import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2H4C2.9 2 2 2.9 2 4V14H4V4H14V2ZM18 6H8C6.9 6 6 6.9 6 8V18H8V8H18V6ZM20 10H12C10.9 10 10 10.9 10 12V20C10 21.1 10.9 22 12 22H20C21.1 22 22 21.1 22 20V12C22 10.9 21.1 10 20 10ZM20 20H12V12H20V20Z" />
    </Svg>
  )
}

Icon.displayName = 'AutoAwesomeMotion'

/**
 * Material Icon: Auto Awesome Motion
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:auto_awesome_motion Material Icon Docs}
 */
export const AutoAwesomeMotion = memo(Icon)
