import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Belize = /* @__PURE__ */ memo(function Belize(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#0052B4"
          d="M40 20c0-6.864-3.459-12.92-8.728-16.522L20 2.608l-11.272.87C3.458 7.08 0 13.136 0 20s3.459 12.92 8.728 16.522l11.272.87 11.272-.87C36.542 32.92 40 26.864 40 20"
        />
        <Path
          fill="#A2001D"
          d="M31.272 3.478A19.9 19.9 0 0 0 20 0 19.9 19.9 0 0 0 8.728 3.478zM8.728 36.522A19.9 19.9 0 0 0 20 40c4.182 0 8.063-1.284 11.272-3.478z"
        />
        <Path
          fill="#F0F0F0"
          d="M20 29.565A9.565 9.565 0 0 0 29.565 20a9.565 9.565 0 0 0-19.13 0A9.565 9.565 0 0 0 20 29.565"
        />
        <Path
          fill="#6DA544"
          d="M20 27.826a7.826 7.826 0 1 0 0-15.652 7.826 7.826 0 0 0 0 15.652"
        />
        <Path
          fill="#F0F0F0"
          d="M20 25.217a5.217 5.217 0 1 0 0-10.434 5.217 5.217 0 0 0 0 10.434"
        />
        <Path fill="#0052B4" d="M20 18.696 17.174 20v2.174L20 23.913l2.826-1.74V20z" />
        <Path fill="#FFDA44" d="M17.174 17.391h5.652V20h-5.652z" />
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
 * Flags by `Deji.Zeal`: Belize
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Belize }
