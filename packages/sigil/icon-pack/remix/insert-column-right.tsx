import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const InsertColumnRight = /* @__PURE__ */ memo(function InsertColumnRight(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 5H5v14h4zm9 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m1 2h-2v1.999L15 11v2l2-.001V15h2v-2.001L21 13v-2l-2-.001z" />
    </Svg>
  )
})
/**
 * Remix Icon: Insert Column Right
 * @see {@link https://remixicon.com/icon/insert-column-right Remix Icon Docs}
 */
export { InsertColumnRight }
