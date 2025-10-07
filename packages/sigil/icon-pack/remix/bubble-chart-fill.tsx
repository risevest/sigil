import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8m8.5-10a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11" />
    </Svg>
  )
})
Icon.displayName = 'BubbleChartFill'
/**
 * Remix Icon: Bubble Chart Fill
 * @see {@link https://remixicon.com/icon/bubble-chart-fill Remix Icon Docs}
 */
export const BubbleChartFill = Icon
