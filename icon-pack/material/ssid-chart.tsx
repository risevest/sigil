import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 5.47L12 12L7.62 7.62L3 11V8.52L7.83 5L12.21 9.38L21 3V5.47ZM21 15H16.3L12.13 18.34L6 12.41L3 14.54V17L5.8 15L12 21L17 17H21V15Z" />
    </Svg>
  )
}

Icon.displayName = 'SsidChart'

/**
 * Material Icon: Ssid Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:ssid_chart Material Icon Docs}
 */
export const SsidChart = memo(Icon)
