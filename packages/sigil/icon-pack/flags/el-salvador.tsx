import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const ElSalvador = /* @__PURE__ */ memo(function ElSalvador(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#0052B4"
          d="M20 0C12.07 0 5.22 4.614 1.984 11.304h36.031C34.78 4.614 27.93 0 20 0M20 40c7.929 0 14.78-4.615 18.015-11.304H1.985C5.218 35.386 12.07 40 20 40"
        />
        <Path fill="#FFDA44" d="M15.983 20.87 20 13.912l4.016 6.956z" />
        <Path fill="#6DA544" d="M25.217 23.166 20 25.776l-5.218-2.61v-3.478h10.435z" />
        <Path
          fill="#FFDA44"
          d="m24.92 14.211-1.845 1.845a4.348 4.348 0 1 1-6.149 0l-1.844-1.845a6.956 6.956 0 1 0 9.838 0"
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
 * Flags by `Deji.Zeal`: El Salvador
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { ElSalvador }
