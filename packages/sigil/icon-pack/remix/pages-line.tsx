import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PagesLine = /* @__PURE__ */ memo(function PagesLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 8v12h14V8zm0-2h14V4H5zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 10h4v4H7zm0 6h10v2H7zm6-5h4v2h-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Pages Line
 * @see {@link https://remixicon.com/icon/pages-line Remix Icon Docs}
 */
export { PagesLine }
