import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.995 10.18V8.72C20.995 8.25 20.835 7.8 20.535 7.44L16.595 2.72C16.215 2.26 15.655 2 15.055 2H2.995C1.895 2 0.994995 2.9 0.994995 4V12C0.994995 13.1 1.895 14 2.995 14H3.175C3.595 15.16 4.695 16 5.995 16C7.295 16 8.39499 15.16 8.81499 14H17.185C17.595 15.16 18.695 16 20.005 16C21.665 16 23.005 14.66 23.005 13C22.995 11.7 22.155 10.6 20.995 10.18ZM5.995 14C5.44499 14 4.995 13.55 4.995 13C4.995 12.45 5.44499 12 5.995 12C6.545 12 6.995 12.45 6.995 13C6.995 13.55 6.545 14 5.995 14ZM6.995 10.17C6.685 10.06 6.345 10 5.995 10C4.695 10 3.575 10.84 3.165 12H2.995V9H6.995V10.17ZM6.995 7H2.995V4H6.995V7ZM13.995 12H8.995V9H11.995V7H8.995V4H13.995V12ZM15.995 5.12L18.395 8H15.995V5.12ZM17.165 12H15.995V10H18.995V10.17C18.145 10.47 17.465 11.15 17.165 12ZM19.995 14C19.445 14 18.995 13.55 18.995 13C18.995 12.45 19.445 12 19.995 12C20.545 12 20.995 12.45 20.995 13C20.995 13.55 20.545 14 19.995 14Z" />
      <Path d="M6.995 19H10.995V17L16.995 20H12.995V22L6.995 19Z" />
    </Svg>
  )
}

Icon.displayName = 'ElectricRickshaw'

/**
 * Material Icon: Electric Rickshaw
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:electric_rickshaw Material Icon Docs}
 */
export const ElectricRickshaw = memo(Icon)
