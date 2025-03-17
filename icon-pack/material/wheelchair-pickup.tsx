import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.70496 4C3.70496 2.89 4.59496 2 5.70496 2C6.81496 2 7.70496 2.89 7.70496 4C7.70496 5.11 6.81496 6 5.70496 6C4.59496 6 3.70496 5.11 3.70496 4ZM9.20496 10.95V9C9.20496 7.9 8.30496 7 7.20496 7H4.20496C3.10496 7 2.20496 7.9 2.20496 9V15H4.20496V22H7.70496V21.89C6.46496 20.63 5.70496 18.9 5.70496 17C5.70496 14.42 7.11496 12.16 9.20496 10.95ZM15.705 17C15.705 18.65 14.355 20 12.705 20C11.055 20 9.70496 18.65 9.70496 17C9.70496 15.89 10.315 14.94 11.205 14.42V12.26C9.18496 12.9 7.70496 14.77 7.70496 17C7.70496 19.76 9.94496 22 12.705 22C15.465 22 17.705 19.76 17.705 17H15.705ZM18.745 14H14.205V8H12.205V16H17.665L20.135 19.71L21.795 18.6L18.745 14Z" />
    </Svg>
  )
}

Icon.displayName = 'WheelchairPickup'

/**
 * Material Icon: Wheelchair Pickup
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wheelchair_pickup Material Icon Docs}
 */
export const WheelchairPickup = memo(Icon)
