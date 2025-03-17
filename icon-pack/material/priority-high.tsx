import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z" />
      <Path d="M10 3H14V15H10V3Z" />
    </Svg>
  )
}

Icon.displayName = 'PriorityHigh'

/**
 * Material Icon: Priority High
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:priority_high Material Icon Docs}
 */
export const PriorityHigh = memo(Icon)
