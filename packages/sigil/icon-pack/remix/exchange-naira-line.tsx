import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExchangeNairaLine = /* @__PURE__ */ memo(function ExchangeNairaLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path d="M16.146 12.584A6.667 6.667 0 0 0 6.692 4.21l-.827-1.447a8.33 8.33 0 0 1 8.301.02 8.334 8.334 0 0 1 3.431 10.642l1.119.645-3.471 1.845-.138-3.929zM3.854 7.413a6.668 6.668 0 0 0 9.454 8.375l.827 1.447a8.33 8.33 0 0 1-8.302-.02 8.334 8.334 0 0 1-3.43-10.641l-1.12-.645 3.471-1.845.138 3.929z" />
        <Path
          fillRule="evenodd"
          d="m13.057 9.052-.008-2.534h-1.666v3.48l.02 1.066h-.01l-.485-1.055-1.772-3.491H6.953l.008 2.534H5.79l-.01 1.61h1.171v2.817H8.62v-3.301l-.031-1.224h.02l.56 1.234 1.687 3.291h2.194v-2.817h1.16l.008-1.61z"
          clipRule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
/**
 * Remix Icon: Exchange Naira Line
 * @see {@link https://remixicon.com/icon/exchange-naira-line Remix Icon Docs}
 */
export { ExchangeNairaLine }
