import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M12 8h8V6h-8zm4 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M4 16v2h8v-2z" />
    </Svg>
  )
})
Icon.displayName = 'Equalizer2Line'
/**
 * Remix Icon: Equalizer 2 Line
 * @see {@link https://remixicon.com/icon/equalizer-2-line Remix Icon Docs}
 */
export const Equalizer2Line = Icon
