import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 21.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9M3 8a5 5 0 0 1 5-5h3v2H8a3 3 0 0 0-3 3v3H3zm16 5v3a3 3 0 0 1-3 3h-3v2h3a5 5 0 0 0 5-5v-3z" />
    </Svg>
  )
})
Icon.displayName = 'Exchange2Fill'
/**
 * Remix Icon: Exchange 2 Fill
 * @see {@link https://remixicon.com/icon/exchange-2-fill Remix Icon Docs}
 */
export const Exchange2Fill = Icon
