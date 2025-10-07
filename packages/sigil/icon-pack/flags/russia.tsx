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
          fill="#0052B4"
          d="M38.756 26.956A20 20 0 0 0 40 20c0-2.447-.44-4.79-1.244-6.956H1.244A20 20 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956L20 28.696z"
        />
        <Path
          fill="#D80027"
          d="M20 40c8.6 0 15.93-5.427 18.756-13.044H1.244C4.07 34.573 11.401 40 20 40"
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
Icon.displayName = 'Russia'
/**
 * Flags by `Deji.Zeal`: Russia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Russia = Icon
