import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 15H8v3h8zm4-8H4v8h2v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1h2zM8 10v2H5v-2zm8-6H8v3h8z" />
    </Svg>
  )
})
Icon.displayName = 'PrinterLine'
/**
 * Remix Icon: Printer Line
 * @see {@link https://remixicon.com/icon/printer-line Remix Icon Docs}
 */
export const PrinterLine = Icon
