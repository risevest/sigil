import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM7 4V3H17V4H7ZM7 18V6H17V18H7ZM7 21V20H17V21H7Z" />
      <Path d="M16 7H8V9H16V7Z" />
    </Svg>
  )
}

Icon.displayName = 'AdUnits'

/**
 * Material Icon: Ad Units
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:ad_units Material Icon Docs}
 */
export const AdUnits = memo(Icon)
