import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.79 18.5L7.28 11.5H16.74L16.23 18.5H7.79ZM9.83 5.5H14.16L16.96 8.23L16.87 9.5H7.12L7.03 8.23L9.83 5.5ZM22 7.96L20.59 6.55L19 8.13L19.03 7.57L14.98 3.5H9.02L4.97 7.57L5 8.07L3.41 6.51L2 7.94L5.23 11.05L5.93 20.5H18.07L18.77 11.06L22 7.96Z" />
    </Svg>
  )
}

Icon.displayName = 'TakeoutDining'

/**
 * Material Icon: Takeout Dining
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:takeout_dining Material Icon Docs}
 */
export const TakeoutDining = memo(Icon)
