import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 16v5H3v-5h2v3h14v-3zM3 11h18v2H3zm18-3h-2V5H5v3H3V3h18z" />
    </Svg>
  )
})
Icon.displayName = 'QrScanLine'
/**
 * Remix Icon: Qr Scan Line
 * @see {@link https://remixicon.com/icon/qr-scan-line Remix Icon Docs}
 */
export const QrScanLine = Icon
