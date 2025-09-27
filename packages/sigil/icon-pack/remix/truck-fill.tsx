import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 8h3l3 4.056V18h-2.035a3.501 3.501 0 0 1-6.93 0h-5.07a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 2v3h4v-.285L18.992 10z" />
    </Svg>
  )
})
Icon.displayName = 'TruckFill'
/**
 * Remix Icon: Truck Fill
 * @see {@link https://remixicon.com/icon/truck-fill Remix Icon Docs}
 */
export const TruckFill = Icon
