import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SubwayLine = /* @__PURE__ */ memo(function SubwayLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17.2 20 1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM13 5v6h6V7a2 2 0 0 0-2-2zm-2 0H7a2 2 0 0 0-2 2v4h6zm8 8H5v5h14zM7.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </Svg>
  )
})
/**
 * Remix Icon: Subway Line
 * @see {@link https://remixicon.com/icon/subway-line Remix Icon Docs}
 */
export { SubwayLine }
