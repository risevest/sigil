import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10L8 21V22H16V21L14 18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 14H3V4H21V14Z" />
    </Svg>
  )
}

Icon.displayName = 'DesktopMac'

/**
 * Material Icon: Desktop Mac
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:desktop_mac Material Icon Docs}
 */
export const DesktopMac = memo(Icon)
