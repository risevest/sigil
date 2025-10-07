import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.032 12 9 9.86v4.28zM7.5 17.535a.5.5 0 0 1-.5-.5V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.288.091M16 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0z" />
    </Svg>
  )
})
Icon.displayName = 'SkipForwardMiniLine'
/**
 * Remix Icon: Skip Forward Mini Line
 * @see {@link https://remixicon.com/icon/skip-forward-mini-line Remix Icon Docs}
 */
export const SkipForwardMiniLine = Icon
