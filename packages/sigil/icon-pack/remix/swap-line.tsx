import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-5-11 3-3.5 3 3.5h-2v4h-2v-4zm10 6-3 3.5-3-3.5h2v-4h2v4z" />
    </Svg>
  )
})
Icon.displayName = 'SwapLine'
/**
 * Remix Icon: Swap Line
 * @see {@link https://remixicon.com/icon/swap-line Remix Icon Docs}
 */
export const SwapLine = Icon
