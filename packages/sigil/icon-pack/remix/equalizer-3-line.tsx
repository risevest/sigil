import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 3v3H3v2h4v3h2V3zm4 5h10V6H11zm6 5v3h4v2h-4v3h-2v-8zm-4 5H3v-2h10z" />
    </Svg>
  )
})
Icon.displayName = 'Equalizer3Line'
/**
 * Remix Icon: Equalizer 3 Line
 * @see {@link https://remixicon.com/icon/equalizer-3-line Remix Icon Docs}
 */
export const Equalizer3Line = Icon
