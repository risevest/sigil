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
        <Path fill="#0052B4" d="M0 20c0 11.046 8.954 20 20 20V20z" />
        <Path fill="#D80027" d="M20 0c11.046 0 20 8.954 20 20H20z" />
        <Path
          fill="#0052B4"
          d="m11.906 6.957 1.295 3.985h4.19l-3.39 2.464 1.295 3.985-3.39-2.463-3.39 2.463 1.294-3.985-3.39-2.464h4.19z"
        />
        <Path
          fill="#D80027"
          d="m28.094 22.609 1.295 3.985h4.191l-3.39 2.464 1.295 3.986-3.39-2.464-3.391 2.464 1.295-3.986-3.39-2.464h4.19z"
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
Icon.displayName = 'Panama'
/**
 * Flags by `Deji.Zeal`: Panama
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Panama = Icon
