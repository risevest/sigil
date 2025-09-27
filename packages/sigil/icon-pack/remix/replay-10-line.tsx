import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.99 9.99 0 0 1 8-4m3.5 11.25a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0zm-1-5a2.5 2.5 0 0 0-2.5 2.5v2.5a2.5 2.5 0 0 0 5 0v-2.5a2.5 2.5 0 0 0-2.5-2.5m-6 7.25v-7H10v7z" />
    </Svg>
  )
})
Icon.displayName = 'Replay10Line'
/**
 * Remix Icon: Replay 10 Line
 * @see {@link https://remixicon.com/icon/replay-10-line Remix Icon Docs}
 */
export const Replay10Line = Icon
