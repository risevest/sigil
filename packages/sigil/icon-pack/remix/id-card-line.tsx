import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const IdCardLine = /* @__PURE__ */ memo(function IdCardLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 6h18v12H3zM2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm11 4h6v2h-6zm5 4h-5v2h5zm-7.5-2a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M8 13.5A3.5 3.5 0 0 0 4.5 17h7A3.5 3.5 0 0 0 8 13.5" />
    </Svg>
  )
})
/**
 * Remix Icon: Id Card Line
 * @see {@link https://remixicon.com/icon/id-card-line Remix Icon Docs}
 */
export { IdCardLine }
