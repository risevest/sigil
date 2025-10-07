import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 7h4v2h-6V3h2zM8 9H2V7h4V3h2zm10 8v4h-2v-6h6v2zM8 15v6H6v-4H2v-2z" />
    </Svg>
  )
})
Icon.displayName = 'FullscreenExitFill'
/**
 * Remix Icon: Fullscreen Exit Fill
 * @see {@link https://remixicon.com/icon/fullscreen-exit-fill Remix Icon Docs}
 */
export const FullscreenExitFill = Icon
