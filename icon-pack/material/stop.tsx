import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 8V16H8V8H16ZM18 6H6V18H18V6Z" />
    </Svg>
  )
}

Icon.displayName = 'Stop'

/**
 * Material Icon: Stop
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:stop Material Icon Docs}
 */
export const Stop = memo(Icon)
