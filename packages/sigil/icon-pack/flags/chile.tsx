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
          d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20s20 0 20 0z"
        />
        <Path fill="#0052B4" d="M0 20C0 8.954 8.954 0 20 0v20z" />
        <Path
          fill="#F0F0F0"
          d="m11.905 6.957 1.295 3.985h4.19L14 13.406l1.295 3.985-3.39-2.463-3.39 2.463 1.294-3.985-3.39-2.464h4.19z"
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
Icon.displayName = 'Chile'
/**
 * Flags by `Deji.Zeal`: Chile
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Chile = Icon
