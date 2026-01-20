import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MobileDownloadLine = /* @__PURE__ */ memo(function MobileDownloadLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 4v16h10v-8h2v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7v2zm12 2h3l-4 4-4-4h3V2h2zm-6 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Mobile Download Line
 * @see {@link https://remixicon.com/icon/mobile-download-line Remix Icon Docs}
 */
export { MobileDownloadLine }
