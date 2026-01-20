import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TBoxLine = /* @__PURE__ */ memo(function TBoxLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 7v7h-2v-7H7V8h10v2z" />
    </Svg>
  )
})
/**
 * Remix Icon: T Box Line
 * @see {@link https://remixicon.com/icon/t-box-line Remix Icon Docs}
 */
export { TBoxLine }
