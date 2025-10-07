import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path fill="#FFDA44" d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20l-20 1.74z" />
        <Path
          fill="#D80027"
          d="M2.677 30C6.135 35.978 12.597 40 20 40c7.402 0 13.865-4.022 17.323-10l-17.323-1.304z"
        />
        <Path
          fill="#0052B4"
          d="M37.324 30A19.9 19.9 0 0 0 40 20H0c0 3.643.975 7.058 2.676 10z"
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
Icon.displayName = 'Colombia'
/**
 * Flags by `Deji.Zeal`: Colombia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Colombia = Icon
