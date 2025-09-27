import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-12.95 4.95 4.95-4.95 4.95-4.95-4.95zm0 2.828-2.121 2.122 2.12 2.121 2.122-2.121z" />
    </Svg>
  )
})
Icon.displayName = 'CopperCoinLine'
/**
 * Remix Icon: Copper Coin Line
 * @see {@link https://remixicon.com/icon/copper-coin-line Remix Icon Docs}
 */
export const CopperCoinLine = Icon
