import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.01 5.5L10 8H14L12.01 5.5ZM18 10V14L20.5 12.01L18 10ZM6 10L3.5 12.01L6 14V10ZM14 16H10L12.01 18.5L14 16ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19.01H3V4.99H21V19.01Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsOverscan'

/**
 * Material Icon: Settings Overscan
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_overscan Material Icon Docs}
 */
export const SettingsOverscan = memo(Icon)
