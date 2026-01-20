import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Window2Fill = /* @__PURE__ */ memo(function Window2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 7H4v9h16zm-5-4v2h4V6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Window 2 Fill
 * @see {@link https://remixicon.com/icon/window-2-fill Remix Icon Docs}
 */
export { Window2Fill }
