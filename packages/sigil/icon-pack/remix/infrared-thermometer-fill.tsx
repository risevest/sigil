import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const InfraredThermometerFill = /* @__PURE__ */ memo(function InfraredThermometerFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 2v9h-3.001L18 12a4 4 0 0 1-4 4h-1.379l-.613 3.111.911 1.321A1 1 0 0 1 12.096 22H3l2.313-10.024L3 11l4-9zm-5.001 9h-2.394l-.591 3H14a2 2 0 0 0 2-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Infrared Thermometer Fill
 * @see {@link https://remixicon.com/icon/infrared-thermometer-fill Remix Icon Docs}
 */
export { InfraredThermometerFill }
