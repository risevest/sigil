import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PrinterCloudFill = /* @__PURE__ */ memo(function PrinterCloudFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 2h10a1 1 0 0 1 1 1v3H6V3a1 1 0 0 1 1-1m15 7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2v-5h7.194q.364-1.337 1.417-2.39Q15.22 11 17.5 11t3.89 1.61q.34.343.61.714zM8 10v2H5v-2zm13 6.5a3.5 3.5 0 1 0-7 0l.003.102a2.751 2.751 0 0 0 .58 5.393l.167.005h5.5l.168-.005a2.75 2.75 0 0 0 .58-5.392zM7 17h3.562A4.6 4.6 0 0 0 10 19.25q0 1.548.871 2.75H7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Printer Cloud Fill
 * @see {@link https://remixicon.com/icon/printer-cloud-fill Remix Icon Docs}
 */
export { PrinterCloudFill }
