import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 4H7V6H5V18H7V20H9V18H11V6H9V4ZM9 16H7V8H9V16Z" />
      <Path d="M19 8H17V4H15V8H13V15H15V20H17V15H19V8ZM17 13H15V10H17V13Z" />
    </Svg>
  )
}

Icon.displayName = 'CandlestickChart'

/**
 * Material Icon: Candlestick Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:candlestick_chart Material Icon Docs}
 */
export const CandlestickChart = memo(Icon)
