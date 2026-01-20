import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Nauru = /* @__PURE__ */ memo(function Nauru(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#0052B4"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#FFDA44"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#0052B4"
          d="M20 0C9.54 0 .958 8.03.076 18.26h39.848C39.042 8.03 30.46 0 20 0M20 40c10.46 0 19.042-8.03 19.924-18.26H.076C.958 31.97 9.54 40 20 40"
        />
        <Path
          fill="#F0F0F0"
          d="m16.522 26.957-2.241 1.054 1.193 2.17-2.433-.466-.309 2.459-1.695-1.808-1.695 1.808-.308-2.459-2.434.466 1.194-2.17-2.241-1.055 2.24-1.054-1.193-2.17 2.434.466.308-2.459 1.695 1.808 1.695-1.808.309 2.459 2.433-.466-1.193 2.17z"
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
 * Flags by `Deji.Zeal`: Nauru
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Nauru }
