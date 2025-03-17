import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6Z" />
    </Svg>
  )
}

Icon.displayName = 'HourglassFull'

/**
 * Material Icon: Hourglass Full
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hourglass_full Material Icon Docs}
 */
export const HourglassFull = memo(Icon)
