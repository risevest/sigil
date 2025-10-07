import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m13.827 1.69 8.486 8.485-1.415 1.414-.707-.707-4.242 4.243-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.243 1.414-1.414 3.536-.707 4.242-4.243-.707-.707zm.707 3.536-4.67 4.67-2.822.565 6.5 6.5.564-2.822 4.671-4.67z" />
    </Svg>
  )
})
Icon.displayName = 'PushpinLine'
/**
 * Remix Icon: Pushpin Line
 * @see {@link https://remixicon.com/icon/pushpin-line Remix Icon Docs}
 */
export const PushpinLine = Icon
