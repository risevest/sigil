import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const EthFill = /* @__PURE__ */ memo(function EthFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 0 4.63 12.22 12 16.574l7.37-4.354zm0 24L4.63 13.617 12 18l7.37-4.383z" />
    </Svg>
  )
})
/**
 * Remix Icon: Eth Fill
 * @see {@link https://remixicon.com/icon/eth-fill Remix Icon Docs}
 */
export { EthFill }
