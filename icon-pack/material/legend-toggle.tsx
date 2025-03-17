import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 15H4V13H20V15ZM20 17H4V19H20V17ZM15 11L20 7.45V5L15 8.55L10 5L4 8.66V11L9.92 7.39L15 11Z" />
    </Svg>
  )
}

Icon.displayName = 'LegendToggle'

/**
 * Material Icon: Legend Toggle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:legend_toggle Material Icon Docs}
 */
export const LegendToggle = memo(Icon)
