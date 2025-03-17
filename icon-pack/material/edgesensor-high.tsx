import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 7H5V14H3V7ZM0 10H2V17H0V10ZM22 7H24V14H22V7ZM19 10H21V17H19V10ZM16 2.01L8 2C6.9 2 6 2.9 6 4V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2.01 16 2.01ZM16 20H8V19H16V20ZM16 17H8V7H16V17ZM8 5V4H16V5H8Z" />
    </Svg>
  )
}

Icon.displayName = 'EdgesensorHigh'

/**
 * Material Icon: Edgesensor High
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:edgesensor_high Material Icon Docs}
 */
export const EdgesensorHigh = memo(Icon)
