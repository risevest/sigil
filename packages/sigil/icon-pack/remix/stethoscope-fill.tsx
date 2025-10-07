import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 3v2H6v4a4 4 0 0 0 8 0V5h-2V3h3a1 1 0 0 1 1 1v5a6 6 0 0 1-5 5.917V16.5a3.5 3.5 0 0 0 6.775 1.238 3 3 0 1 1 2.05.148A5.502 5.502 0 0 1 8.999 16.5v-1.583A6 6 0 0 1 4 9V4a1 1 0 0 1 1-1z" />
    </Svg>
  )
})
Icon.displayName = 'StethoscopeFill'
/**
 * Remix Icon: Stethoscope Fill
 * @see {@link https://remixicon.com/icon/stethoscope-fill Remix Icon Docs}
 */
export const StethoscopeFill = Icon
