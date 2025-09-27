import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 11h-1V7h1V4h2v3h1v4h-1v7a3 3 0 1 1-6 0v-4h-2v5h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0zm-8 8V5H5v14zm-3-8h3l-4 6v-4H5l4-6z" />
    </Svg>
  )
})
Icon.displayName = 'ChargingPile2Line'
/**
 * Remix Icon: Charging Pile 2 Line
 * @see {@link https://remixicon.com/icon/charging-pile-2-line Remix Icon Docs}
 */
export const ChargingPile2Line = Icon
