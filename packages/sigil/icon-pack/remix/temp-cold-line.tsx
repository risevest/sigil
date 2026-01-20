import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TempColdLine = /* @__PURE__ */ memo(function TempColdLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298zM8 16h8a4 4 0 0 1-8 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Temp Cold Line
 * @see {@link https://remixicon.com/icon/temp-cold-line Remix Icon Docs}
 */
export { TempColdLine }
