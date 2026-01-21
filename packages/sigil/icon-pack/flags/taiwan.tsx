import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Taiwan = /* @__PURE__ */ memo(function Taiwan(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#D80027"
          d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20L20 0c11.046 0 20 8.954 20 20"
        />
        <Path fill="#0052B4" d="M20 20V0C8.954 0 0 8.954 0 20z" />
        <Path
          fill="#F0F0F0"
          d="m17.391 11.705-2.443 1.149 1.301 2.365-2.652-.507-.336 2.68-1.848-1.971-1.847 1.97-.336-2.68-2.653.508 1.301-2.365-2.442-1.15 2.442-1.148-1.3-2.366 2.652.508.336-2.68 1.847 1.97 1.848-1.97.336 2.68 2.652-.508-1.3 2.366z"
        />
        <Path
          fill="#0052B4"
          d="M11.414 15.427a3.723 3.723 0 1 0 0-7.446 3.723 3.723 0 0 0 0 7.446"
        />
        <Path
          fill="#F0F0F0"
          d="M11.413 13.688a1.986 1.986 0 0 1-1.983-1.983c0-1.094.89-1.984 1.983-1.984 1.094 0 1.984.89 1.984 1.984s-.89 1.983-1.984 1.983"
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
 * Flags by `Deji.Zeal`: Taiwan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Taiwan }
