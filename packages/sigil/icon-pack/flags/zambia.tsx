import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Zambia = /* @__PURE__ */ memo(function Zambia(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#496E2D"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path fill="#D80027" d="M27.826 20H20v20c2.338 0 4.581-.402 6.667-1.14z" />
        <Path fill="#FF9811" d="M33.333 34.906A19.95 19.95 0 0 0 40 20h-7.826z" />
        <Path fill="#000" d="M26.666 20v18.86a20 20 0 0 0 6.667-3.954V20z" />
        <Path
          fill="#FF9811"
          d="M36.956 13.044H31.74a1.74 1.74 0 0 0-3.479 0h-5.217c0 .96.837 1.739 1.797 1.739h-.058c0 .96.779 1.739 1.74 1.739 0 .96.778 1.739 1.738 1.739h3.479c.96 0 1.739-.779 1.739-1.74.96 0 1.739-.778 1.739-1.738h-.058c.96 0 1.797-.779 1.797-1.74"
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
 * Flags by `Deji.Zeal`: Zambia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Zambia }
