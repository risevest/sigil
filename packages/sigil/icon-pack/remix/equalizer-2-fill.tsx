import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 7a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m17 1h-8V6h8zm-6 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m-2-1v2H4v-2z" />
    </Svg>
  )
})
Icon.displayName = 'Equalizer2Fill'
/**
 * Remix Icon: Equalizer 2 Fill
 * @see {@link https://remixicon.com/icon/equalizer-2-fill Remix Icon Docs}
 */
export const Equalizer2Fill = Icon
