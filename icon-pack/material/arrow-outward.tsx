import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.5 5.5V7.5H15.09L5.5 17.09L6.91 18.5L16.5 8.91V17.5H18.5V5.5H6.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowOutward'

/**
 * Material Icon: Arrow Outward
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_outward Material Icon Docs}
 */
export const ArrowOutward = memo(Icon)
