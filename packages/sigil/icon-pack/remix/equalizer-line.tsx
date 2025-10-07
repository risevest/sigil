import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4zM9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </Svg>
  )
})
Icon.displayName = 'EqualizerLine'
/**
 * Remix Icon: Equalizer Line
 * @see {@link https://remixicon.com/icon/equalizer-line Remix Icon Docs}
 */
export const EqualizerLine = Icon
