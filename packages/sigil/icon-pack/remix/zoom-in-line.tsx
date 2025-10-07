import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7 3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975zM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2z" />
    </Svg>
  )
})
Icon.displayName = 'ZoomInLine'
/**
 * Remix Icon: Zoom In Line
 * @see {@link https://remixicon.com/icon/zoom-in-line Remix Icon Docs}
 */
export const ZoomInLine = Icon
