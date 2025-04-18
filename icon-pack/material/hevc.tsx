import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.5 11H4.5V9H3V15H4.5V12.5H5.5V15H7V9H5.5V11Z" />
      <Path d="M21 11V10C21 9.45 20.55 9 20 9H18C17.45 9 17 9.45 17 10V14C17 14.55 17.45 15 18 15H20C20.55 15 21 14.55 21 14V13H19.5V13.5H18.5V10.5H19.5V11H21Z" />
      <Path d="M14.25 13.5L13.5 9H12L13 15H15.5L16.5 9H15L14.25 13.5Z" />
      <Path d="M8 9V15H11.5V13.5H9.5V12.5H11.5V11H9.5V10.5H11.5V9H8Z" />
    </Svg>
  )
}

Icon.displayName = 'Hevc'

/**
 * Material Icon: Hevc
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hevc Material Icon Docs}
 */
export const Hevc = memo(Icon)
