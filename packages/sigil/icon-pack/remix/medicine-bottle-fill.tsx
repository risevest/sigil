import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MedicineBottleFill = /* @__PURE__ */ memo(function MedicineBottleFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 5v2a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a3 3 0 0 1 3-3V5zm-4 6h-2v2H9v2h1.999L11 17h2l-.001-2H15v-2h-2zm6-9v2H5V2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Medicine Bottle Fill
 * @see {@link https://remixicon.com/icon/medicine-bottle-fill Remix Icon Docs}
 */
export { MedicineBottleFill }
