import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 15H12.5V9H11V15ZM18.75 9V12.5L16.25 9H15V15H16.25V11.5L18.8 15H20V9H18.75ZM7.5 9H4V15H5.5V13H7.5C8.35 13 9 12.35 9 11.5V10.5C9 9.65 8.35 9 7.5 9ZM7.5 11.5H5.5V10.5H7.5V11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FiberPin'

/**
 * Material Icon: Fiber Pin
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fiber_pin Material Icon Docs}
 */
export const FiberPin = memo(Icon)
