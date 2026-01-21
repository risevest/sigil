import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExpandHeightLine = /* @__PURE__ */ memo(function ExpandHeightLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 2h12v2H6zm10.95 7.45L12 4.5 7.053 9.447l1.414 1.415L11 8.328v7.343l-2.535-2.535-1.414 1.414L12 19.5l4.95-4.95-1.414-1.414L13 15.672V8.328l2.536 2.536zM18 20v2H6v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Expand Height Line
 * @see {@link https://remixicon.com/icon/expand-height-line Remix Icon Docs}
 */
export { ExpandHeightLine }
