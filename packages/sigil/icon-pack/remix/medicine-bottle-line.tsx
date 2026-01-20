import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MedicineBottleLine = /* @__PURE__ */ memo(function MedicineBottleLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 2v2h-2v3a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a3 3 0 0 1 3-3V4H5V2zm-2 7H7a1 1 0 0 0-1 1v10h12V10a1 1 0 0 0-1-1m-4 2v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2zm2-7H9v3h6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Medicine Bottle Line
 * @see {@link https://remixicon.com/icon/medicine-bottle-line Remix Icon Docs}
 */
export { MedicineBottleLine }
