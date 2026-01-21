import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Morocco = /* @__PURE__ */ memo(function Morocco(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#D80027"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#FFDA44"
          d="M31.82 16.413h-9.03L20 7.826l-2.79 8.587H8.18l7.305 5.308-2.79 8.587L20 25.001l7.305 5.307-2.79-8.587zm-14.29 4.643.943-2.904h3.054l.943 2.904L20 22.851zm3.432-4.643h-1.923L20 13.454zm2.988 3.569-.595-1.83h3.112zm-7.305-1.83-.594 1.83-2.518-1.83zm-.642 7.603.962-2.96 1.556 1.13zm5.476-1.83 1.556-1.13.962 2.96z"
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
 * Flags by `Deji.Zeal`: Morocco
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Morocco }
