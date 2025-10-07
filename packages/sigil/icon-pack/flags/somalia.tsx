import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#338AF3"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.955 0 20s8.954 20 20 20"
        />
        <Path
          fill="#F0F0F0"
          d="m20 10.435 2.16 6.643h6.984l-5.651 4.105 2.158 6.643-5.65-4.105-5.651 4.105 2.158-6.643-5.65-4.105h6.984z"
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
Icon.displayName = 'Somalia'
/**
 * Flags by `Deji.Zeal`: Somalia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Somalia = Icon
