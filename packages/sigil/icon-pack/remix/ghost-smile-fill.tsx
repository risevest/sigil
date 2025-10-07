import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976 2.999 2.999 0 0 1-5.223 0 3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9m4 11h-2a2 2 0 0 1-3.995.15L10 13H8l.005.2a4 4 0 0 0 7.99 0zm-4-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
    </Svg>
  )
})
Icon.displayName = 'GhostSmileFill'
/**
 * Remix Icon: Ghost Smile Fill
 * @see {@link https://remixicon.com/icon/ghost-smile-fill Remix Icon Docs}
 */
export const GhostSmileFill = Icon
