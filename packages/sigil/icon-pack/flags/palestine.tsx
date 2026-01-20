import { memo } from 'react'
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Palestine = /* @__PURE__ */ memo(function Palestine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Rect width={40} height={40} fill="#fff" rx={20} />
        <Path fill="#000" d="M-4-1.8h48v14.6H-4z" />
        <Path fill="#017B3D" d="M-4 27h48v14.6H-4z" />
        <Path fill="#CD1125" d="M.279 2.4 22.6 20.137.121 38-22.2 20.262z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect width={40} height={40} fill="#fff" rx={20} />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
/**
 * Flags by `Deji.Zeal`: Palestine
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Palestine }
