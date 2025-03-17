import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 3.5L2 12.5H5V20.5H19V12.5H22L12 3.5ZM7 18.5V10.69L12 6.19L17 10.69V18.5H7ZM14 14.5C14 15.6 13.1 16.5 12 16.5C10.9 16.5 10 15.6 10 14.5C10 13.4 12 10.5 12 10.5C12 10.5 14 13.4 14 14.5Z" />
    </Svg>
  )
}

Icon.displayName = 'WaterDamage'

/**
 * Material Icon: Water Damage
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:water_damage Material Icon Docs}
 */
export const WaterDamage = memo(Icon)
