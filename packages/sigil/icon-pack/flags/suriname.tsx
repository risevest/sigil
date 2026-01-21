import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Suriname = /* @__PURE__ */ memo(function Suriname(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#A2001D"
          d="M38.756 13.044H1.244A20 20 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956h37.512A20 20 0 0 0 40 20c0-2.447-.44-4.79-1.244-6.956"
        />
        <Path
          fill="#6DA544"
          d="M20.058 40c6.85 0 12.895-3.445 16.5-8.696h-33C7.164 36.555 13.209 40 20.059 40M20.058 0c6.85 0 12.895 3.445 16.5 8.696h-33C7.164 3.445 13.209 0 20.059 0"
        />
        <Path
          fill="#FFDA44"
          d="m20 13.044 1.727 5.314h5.588l-4.521 3.284 1.727 5.314L20 23.672l-4.522 3.284 1.727-5.314-4.52-3.284h5.587z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
/**
 * Flags by `Deji.Zeal`: Suriname
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Suriname }
