import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 3h6v6h-6zM9 3v6H3V3zm6 18v-6h6v6zm-6 0H3v-6h6zM3 11h18v2H3z" />
    </Svg>
  )
})
Icon.displayName = 'QrScan2Fill'
/**
 * Remix Icon: Qr Scan 2 Fill
 * @see {@link https://remixicon.com/icon/qr-scan-2-fill Remix Icon Docs}
 */
export const QrScan2Fill = Icon
