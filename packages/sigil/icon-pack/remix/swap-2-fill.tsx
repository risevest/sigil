import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17.207 2.293-1.414 1.414L18.086 6H13v2h5.086l-2.293 2.293 1.414 1.414L21.914 7zM7 11.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M5.914 18l2.293 2.293-1.414 1.414L2.086 17l4.707-4.707 1.414 1.414L5.914 16H11v2zM14 13a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" />
    </Svg>
  )
})
Icon.displayName = 'Swap2Fill'
/**
 * Remix Icon: Swap 2 Fill
 * @see {@link https://remixicon.com/icon/swap-2-fill Remix Icon Docs}
 */
export const Swap2Fill = Icon
