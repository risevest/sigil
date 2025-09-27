import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#D80027"
          d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20c-.87 0-20 2.609-20 2.609z"
        />
        <Path fill="#6DA544" d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20" />
        <Path
          fill="#FFDA44"
          d="m20 13.044 1.51 4.65h4.89l-3.955 2.873 1.51 4.65L20 22.344l-3.956 2.873 1.511-4.65-3.955-2.874h4.889z"
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
Icon.displayName = 'BurkinaFaso'
/**
 * Flags by `Deji.Zeal`: Burkina Faso
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const BurkinaFaso = Icon
