import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.81 7.94L13.06 4.19L4 13.25V17H7.75L16.81 7.94ZM6 15V14.08L13.06 7.02L13.98 7.94L6.92 15H6Z" />
      <Path d="M19.71 5.04C20.1 4.65 20.1 4.02 19.71 3.63L17.37 1.29C17.17 1.09 16.92 1 16.66 1C16.41 1 16.15 1.1 15.96 1.29L14.13 3.12L17.88 6.87L19.71 5.04Z" />
      <Path d="M22 19H2V23H22V19Z" />
    </Svg>
  )
}

Icon.displayName = 'BorderColor'

/**
 * Material Icon: Border Color
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:border_color Material Icon Docs}
 */
export const BorderColor = memo(Icon)
