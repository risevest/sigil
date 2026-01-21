import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ContractLeftFill = /* @__PURE__ */ memo(function ContractLeftFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 5v6h6v2h-6v6l-7-7zM4 19V5h2v14z" />
    </Svg>
  )
})
/**
 * Remix Icon: Contract Left Fill
 * @see {@link https://remixicon.com/icon/contract-left-fill Remix Icon Docs}
 */
export { ContractLeftFill }
