import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 11C21 6.03 16.97 2 12 2C7.03 2 3 6.03 3 11C3 14.92 5.51 18.24 9 19.48V22H11V19.94C11.33 19.98 11.66 20 12 20C12.34 20 12.67 19.98 13 19.94V22H15V19.48C18.49 18.24 21 14.92 21 11ZM12 18C8.14 18 5 14.86 5 11C5 7.14 8.14 4 12 4C15.86 4 19 7.14 19 11C19 14.86 15.86 18 12 18Z" />
      <Path d="M16 7H8V9H16V7Z" />
      <Path d="M12.75 10L9.75 13L11 14.25L9.75 15.5L11.25 17L14.25 14L13 12.75L14.25 11.5L12.75 10Z" />
    </Svg>
  )
}

Icon.displayName = 'ElectricMeter'

/**
 * Material Icon: Electric Meter
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:electric_meter Material Icon Docs}
 */
export const ElectricMeter = memo(Icon)
