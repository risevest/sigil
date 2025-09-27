import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 2.05v2.012a8.001 8.001 0 1 0 5.906 14.258l1.423 1.423A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95M21.95 13a9.95 9.95 0 0 1-2.207 5.328l-1.423-1.422A7.96 7.96 0 0 0 19.938 13zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-2.013a8.004 8.004 0 0 0-6.937-6.938z" />
    </Svg>
  )
})
Icon.displayName = 'DonutChartLine'
/**
 * Remix Icon: Donut Chart Line
 * @see {@link https://remixicon.com/icon/donut-chart-line Remix Icon Docs}
 */
export const DonutChartLine = Icon
