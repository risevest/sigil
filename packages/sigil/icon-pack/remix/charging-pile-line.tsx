import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 19h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657 1.414-1.414 4.95 4.95A1 1 0 0 1 22 9v9a3 3 0 1 1-6 0v-4h-2zm-9 0h7V5H5zm4-8h3l-4 6v-4H5l4-6z" />
    </Svg>
  )
})
Icon.displayName = 'ChargingPileLine'
/**
 * Remix Icon: Charging Pile Line
 * @see {@link https://remixicon.com/icon/charging-pile-line Remix Icon Docs}
 */
export const ChargingPileLine = Icon
