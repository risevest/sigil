import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 3h6v5h-2V5h-4zM9 3v2H5v3H3V3zm6 18v-2h4v-3h2v5zm-6 0H3v-5h2v3h4zM3 11h18v2H3z" />
    </Svg>
  )
})
Icon.displayName = 'QrScan2Line'
/**
 * Remix Icon: Qr Scan 2 Line
 * @see {@link https://remixicon.com/icon/qr-scan-2-line Remix Icon Docs}
 */
export const QrScan2Line = Icon
