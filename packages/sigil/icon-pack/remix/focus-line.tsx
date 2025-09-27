import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </Svg>
  )
})
Icon.displayName = 'FocusLine'
/**
 * Remix Icon: Focus Line
 * @see {@link https://remixicon.com/icon/focus-line Remix Icon Docs}
 */
export const FocusLine = Icon
