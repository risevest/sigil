import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Box3Line = /* @__PURE__ */ memo(function Box3Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zM5.494 7.078 12 10.844l6.506-3.766L12 3.31zM4.5 8.813v7.534L11 20.11v-7.533zM13 20.11l6.5-3.763V8.813L13 12.576z" />
    </Svg>
  )
})
/**
 * Remix Icon: Box 3 Line
 * @see {@link https://remixicon.com/icon/box-3-line Remix Icon Docs}
 */
export { Box3Line }
