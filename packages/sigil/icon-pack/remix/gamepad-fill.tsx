import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6zm-7 5H8v2H6v2h1.999L8 15h2l-.001-2H12v-2h-2zm8 4h-2v2h2zm-2-4h-2v2h2z" />
    </Svg>
  )
})
Icon.displayName = 'GamepadFill'
/**
 * Remix Icon: Gamepad Fill
 * @see {@link https://remixicon.com/icon/gamepad-fill Remix Icon Docs}
 */
export const GamepadFill = Icon
