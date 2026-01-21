import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MoneyCnyBoxFill = /* @__PURE__ */ memo(function MoneyCnyBoxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m10 10v-1h3v-2h-2.586L15.54 7.88l-1.414-1.414-2.121 2.122-2.121-2.122-1.415 1.414 2.122 2.122H8.005v2h3v1h-3v2h3v2h2v-2h3v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Money Cny Box Fill
 * @see {@link https://remixicon.com/icon/money-cny-box-fill Remix Icon Docs}
 */
export { MoneyCnyBoxFill }
