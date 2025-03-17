import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.5 18.4898L9.5 12.4798L13.5 16.4798L22 6.91977L20.59 5.50977L13.5 13.4798L9.5 9.47976L2 16.9898L3.5 18.4898Z" />
    </Svg>
  )
}

Icon.displayName = 'ShowChart'

/**
 * Material Icon: Show Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:show_chart Material Icon Docs}
 */
export const ShowChart = memo(Icon)
