import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 4C19 2.9 18.1 2 17 2H14V4H17V6.65L13.52 11H10V6H6C3.79 6 2 7.79 2 10V13H4C4 14.66 5.34 16 7 16C8.66 16 10 14.66 10 13H14.48L19 7.35V4ZM4 11V10C4 8.9 4.9 8 6 8H8V11H4ZM7 14C6.45 14 6 13.55 6 13H8C8 13.55 7.55 14 7 14Z" />
      <Path d="M10 3H5V5H10V3Z" />
      <Path d="M19 10C17.34 10 16 11.34 16 13C16 14.66 17.34 16 19 16C20.66 16 22 14.66 22 13C22 11.34 20.66 10 19 10ZM19 14C18.45 14 18 13.55 18 13C18 12.45 18.45 12 19 12C19.55 12 20 12.45 20 13C20 13.55 19.55 14 19 14Z" />
      <Path d="M7 19H11V17L17 20H13V22L7 19Z" />
    </Svg>
  )
}

Icon.displayName = 'ElectricMoped'

/**
 * Material Icon: Electric Moped
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:electric_moped Material Icon Docs}
 */
export const ElectricMoped = memo(Icon)
