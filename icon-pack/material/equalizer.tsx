import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" />
    </Svg>
  )
}

Icon.displayName = 'Equalizer'

/**
 * Material Icon: Equalizer
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:equalizer Material Icon Docs}
 */
export const Equalizer = memo(Icon)
