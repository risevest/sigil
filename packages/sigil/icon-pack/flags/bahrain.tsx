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
          fill="#D80027"
          d="M20 0c-4.014 0-7.75 1.183-10.883 3.219l5.144 3.447L7.826 10l6.435 3.334-6.435 3.333 6.435 3.333-6.435 3.333 6.435 3.333L7.826 30l6.435 3.333-5.144 3.449A19.9 19.9 0 0 0 20 40c11.046 0 20-8.954 20-20S31.046 0 20 0"
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
Icon.displayName = 'Bahrain'
/**
 * Flags by `Deji.Zeal`: Bahrain
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Bahrain = Icon
