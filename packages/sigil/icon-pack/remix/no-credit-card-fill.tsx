import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NoCreditCardFill = /* @__PURE__ */ memo(function NoCreditCardFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m19.586 21 1.607 1.607 1.414-1.415-19.8-19.799-1.413 1.415.726.726A1 1 0 0 0 2.005 4v3h3.58l4 4h-7.58v9a1 1 0 0 0 1 1zm2.419-10v6.762L15.243 11zm0-4H11.243l-4-4h13.762a1 1 0 0 1 1 1z" />
    </Svg>
  )
})
/**
 * Remix Icon: No Credit Card Fill
 * @see {@link https://remixicon.com/icon/no-credit-card-fill Remix Icon Docs}
 */
export { NoCreditCardFill }
