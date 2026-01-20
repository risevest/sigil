import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PrinterFill = /* @__PURE__ */ memo(function PrinterFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 17h10v5H7zm12 3v-5H5v5H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM5 10v2h3v-2zm2-8h10a1 1 0 0 1 1 1v3H6V3a1 1 0 0 1 1-1" />
    </Svg>
  )
})
/**
 * Remix Icon: Printer Fill
 * @see {@link https://remixicon.com/icon/printer-fill Remix Icon Docs}
 */
export { PrinterFill }
