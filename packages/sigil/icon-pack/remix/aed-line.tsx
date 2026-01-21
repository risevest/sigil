import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AedLine = /* @__PURE__ */ memo(function AedLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm13 5h-3V6l-5 7h3v5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Aed Line
 * @see {@link https://remixicon.com/icon/aed-line Remix Icon Docs}
 */
export { AedLine }
