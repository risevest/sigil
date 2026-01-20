import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PassportLine = /* @__PURE__ */ memo(function PassportLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-1 2H5v16h14zm-3 12v2H8v-2zM12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
    </Svg>
  )
})
/**
 * Remix Icon: Passport Line
 * @see {@link https://remixicon.com/icon/passport-line Remix Icon Docs}
 */
export { PassportLine }
