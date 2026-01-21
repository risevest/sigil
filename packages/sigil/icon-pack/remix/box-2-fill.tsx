import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Box2Fill = /* @__PURE__ */ memo(function Box2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zM4.5 7.658v8.689l7.5 4.342V12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Box 2 Fill
 * @see {@link https://remixicon.com/icon/box-2-fill Remix Icon Docs}
 */
export { Box2Fill }
