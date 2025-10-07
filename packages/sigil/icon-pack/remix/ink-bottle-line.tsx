import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 8.997 4.371 1.748a1 1 0 0 1 .629.929v9.323a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.323a1 1 0 0 1 .629-.929L8 8.997zm-.385 2h-7.23L5 12.35v7.646h14v-1H8v-5h11V12.35zm.385-8a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1zm-1 2H9v1h6z" />
    </Svg>
  )
})
Icon.displayName = 'InkBottleLine'
/**
 * Remix Icon: Ink Bottle Line
 * @see {@link https://remixicon.com/icon/ink-bottle-line Remix Icon Docs}
 */
export const InkBottleLine = Icon
