import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#000"
          d="m11.305 26.957 1.739 11.8A20 20 0 0 0 20 40c8.6 0 15.93-5.427 18.756-13.044z"
        />
        <Path
          fill="#6DA544"
          d="m11.305 13.044 1.739-11.8A20 20 0 0 1 20 0c8.6 0 15.93 5.428 18.756 13.044z"
        />
        <Path
          fill="#A2001D"
          d="M0 20c0 8.6 5.428 15.93 13.044 18.756V1.244C5.428 4.07 0 11.401 0 20"
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
Icon.displayName = 'UnitedArabEmirates'
/**
 * Flags by `Deji.Zeal`: United Arab Emirates
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const UnitedArabEmirates = Icon
