import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6zm0 2H7a4 4 0 0 0-3.995 3.8L3 10v4a4 4 0 0 0 3.8 3.995L7 18h10a4 4 0 0 0 3.995-3.8L21 14v-4a4 4 0 0 0-3.8-3.995zm-7 3v2h2v2H9.999L10 15H8l-.001-2H6v-2h2V9zm8 4v2h-2v-2zm-2-4v2h-2V9z" />
    </Svg>
  )
})
Icon.displayName = 'GamepadLine'
/**
 * Remix Icon: Gamepad Line
 * @see {@link https://remixicon.com/icon/gamepad-line Remix Icon Docs}
 */
export const GamepadLine = Icon
