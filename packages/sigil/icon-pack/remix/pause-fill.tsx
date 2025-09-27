import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 5h2v14H6zm10 0h2v14h-2z" />
    </Svg>
  )
})
Icon.displayName = 'PauseFill'
/**
 * Remix Icon: Pause Fill
 * @see {@link https://remixicon.com/icon/pause-fill Remix Icon Docs}
 */
export const PauseFill = Icon
