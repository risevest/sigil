import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 4H21V20H18V4ZM3 13H6V20H3V13ZM14 4H17V7H14V4ZM10 5H13V9H10V5ZM7 10H10V14H7V10Z" />
    </Svg>
  )
}

Icon.displayName = 'WaterfallChart'

/**
 * Material Icon: Waterfall Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:waterfall_chart Material Icon Docs}
 */
export const WaterfallChart = memo(Icon)
