import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Kyrgyzstan = /* @__PURE__ */ memo(function Kyrgyzstan(_props: IconProps) {
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
          d="m29.78 20-3.996 1.88 2.129 3.87-4.34-.83-.55 4.384L20 26.08l-3.023 3.224-.55-4.384-4.34.83 2.128-3.87L10.22 20l3.996-1.88-2.128-3.87 4.34.83.55-4.385L20 13.92l3.023-3.225.55 4.385 4.34-.83-2.129 3.87z"
        />
        <Path
          fill="#D80027"
          d="M20 26.087a6.087 6.087 0 1 0 0-12.174 6.087 6.087 0 0 0 0 12.174"
        />
        <Path
          fill="#FFDA44"
          d="M16.957 20q-.22 0-.434.022c.005.843.31 1.614.813 2.214a6.1 6.1 0 0 1 1.177-1.947A4.3 4.3 0 0 0 16.957 20M18.83 23.276a3.47 3.47 0 0 0 2.34 0 4.35 4.35 0 0 0-1.17-2.03 4.35 4.35 0 0 0-1.17 2.03M23.013 18.261a3.476 3.476 0 0 0-6.025 0A6.05 6.05 0 0 1 20 19.08a6.05 6.05 0 0 1 3.012-.819M21.488 20.289a6.1 6.1 0 0 1 1.176 1.947c.504-.6.809-1.371.814-2.214a4.36 4.36 0 0 0-1.99.267"
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
 * Flags by `Deji.Zeal`: Kyrgyzstan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Kyrgyzstan }
