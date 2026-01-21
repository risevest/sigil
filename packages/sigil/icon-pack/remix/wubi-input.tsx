import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const WubiInput = /* @__PURE__ */ memo(function WubiInput(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 21v-2h3.662l1.234-7H5v-2h3.249l.881-5H4V3h16v2h-8.839l-.882 5H18v9h3v2zm13-9H9.927l-1.235 7H16z" />
    </Svg>
  )
})
/**
 * Remix Icon: Wubi Input
 * @see {@link https://remixicon.com/icon/wubi-input Remix Icon Docs}
 */
export { WubiInput }
