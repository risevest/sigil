import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 19v-5.111L3 5V3h18v2l-8 8.889V19h5v2H6v-2zM7.49 7h9.02l1.8-2H5.69z" />
    </Svg>
  )
})
Icon.displayName = 'GobletFill'
/**
 * Remix Icon: Goblet Fill
 * @see {@link https://remixicon.com/icon/goblet-fill Remix Icon Docs}
 */
export const GobletFill = Icon
