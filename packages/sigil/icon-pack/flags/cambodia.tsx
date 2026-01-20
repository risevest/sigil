import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Cambodia = /* @__PURE__ */ memo(function Cambodia(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#D80027"
          d="M0 20c0 3.465.881 6.724 2.432 9.565L20 31.305l17.568-1.74A19.9 19.9 0 0 0 40 20c0-3.465-.882-6.724-2.432-9.565L20 8.695l-17.568 1.74A19.9 19.9 0 0 0 0 20"
        />
        <Path
          fill="#0052B4"
          d="M2.432 10.435h35.136C34.176 4.218 27.581 0 20 0S5.824 4.218 2.432 10.435M20 40c7.58 0 14.176-4.218 17.568-10.435H2.432C5.824 35.782 12.419 40 20 40"
        />
        <Path
          fill="#F0F0F0"
          d="M26.957 23.913v-2.609h-1.74v-3.478l-1.738-1.74-1.74 1.74v-3.478L20 12.608l-1.739 1.74v3.478l-1.739-1.74-1.74 1.74v3.478h-1.738v2.609h-1.74v2.609h17.392v-2.609z"
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
 * Flags by `Deji.Zeal`: Cambodia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Cambodia }
