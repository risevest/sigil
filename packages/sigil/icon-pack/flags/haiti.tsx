import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#A2001D"
          d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 20 0 20 0s20 8.954 20 20"
        />
        <Path fill="#0052B4" d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20" />
        <Path fill="#F0F0F0" d="M26.956 25.217 20 24.347l-6.957.87V14.783h13.913z" />
        <Path
          fill="#0052B4"
          d="M20 24.348a3.478 3.478 0 1 0 0-6.957 3.478 3.478 0 0 0 0 6.957"
        />
        <Path
          fill="#A2001D"
          d="M20 22.609a1.74 1.74 0 1 0 0-3.479 1.74 1.74 0 0 0 0 3.479"
        />
        <Path fill="#6DA544" d="M17.392 16.522h5.217L20 19.13z" />
        <Path fill="#FFDA44" d="M19.13 18.26h1.739v5.218h-1.74z" />
        <Path fill="#6DA544" d="M22.782 22.956h-5.565l-4.174 2.261h13.913z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
Icon.displayName = 'Haiti'
/**
 * Flags by `Deji.Zeal`: Haiti
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Haiti = Icon
