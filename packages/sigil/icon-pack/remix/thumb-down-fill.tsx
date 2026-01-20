import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ThumbDownFill = /* @__PURE__ */ memo(function ThumbDownFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 15h-3V3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1m-5.293 1.293-6.4 6.4a.5.5 0 0 1-.654.047L8.8 22.1a1.5 1.5 0 0 1-.553-1.57L9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H16a1 1 0 0 1 1 1v11.586a1 1 0 0 1-.293.707" />
    </Svg>
  )
})
/**
 * Remix Icon: Thumb Down Fill
 * @see {@link https://remixicon.com/icon/thumb-down-fill Remix Icon Docs}
 */
export { ThumbDownFill }
