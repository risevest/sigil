import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NftFill = /* @__PURE__ */ memo(function NftFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-11 9.5 5.5v11L12 23l-9.5-5.5v-11zM4.5 7.653v8.694l2.372 1.373 8.073-5.92 4.555 2.734v-6.88L12 3.31z" />
    </Svg>
  )
})
/**
 * Remix Icon: Nft Fill
 * @see {@link https://remixicon.com/icon/nft-fill Remix Icon Docs}
 */
export { NftFill }
