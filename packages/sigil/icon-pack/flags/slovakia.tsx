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
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.955 0 20s8.954 20 20 20"
        />
        <Path
          fill="#0052B4"
          d="M20 40c11.046 0 20-8.954 20-20 0-2.447-.44-4.79-1.244-6.956H1.244A20 20 0 0 0 0 20c0 11.046 8.954 20 20 20"
        />
        <Path
          fill="#D80027"
          d="M20 40c8.6 0 15.93-5.427 18.756-13.044H1.244C4.07 34.573 11.401 40 20 40"
        />
        <Path
          fill="#F0F0F0"
          d="M5.172 11.304v9.978c0 5.675 7.414 7.414 7.414 7.414S20 26.956 20 21.282v-9.978z"
        />
        <Path
          fill="#D80027"
          d="M6.91 11.304v9.978q0 1 .441 1.885H17.82q.44-.886.441-1.886v-9.977z"
        />
        <Path
          fill="#F0F0F0"
          d="M16.064 18.26h-2.609v-1.738h1.74v-1.74h-1.74v-1.739h-1.739v1.74H9.977v1.739h1.74v1.739h-2.61V20h2.61v1.74h1.738V20h2.609z"
        />
        <Path
          fill="#0052B4"
          d="M9.724 25.595c1.12.704 2.272 1.113 2.861 1.295.59-.182 1.741-.591 2.862-1.296 1.13-.71 1.922-1.522 2.372-2.427a3.03 3.03 0 0 0-2.447-.478 3.044 3.044 0 0 0-5.573 0 3.05 3.05 0 0 0-2.447.478c.45.905 1.241 1.717 2.372 2.427"
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
Icon.displayName = 'Slovakia'
/**
 * Flags by `Deji.Zeal`: Slovakia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Slovakia = Icon
