import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#FFDA44"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#D80027"
          d="M23.042 39.77a19.9 19.9 0 0 0 8.785-3.642L20 20zM16.958.23a19.9 19.9 0 0 0-8.786 3.642L19.999 20zM8.172 36.128a19.9 19.9 0 0 0 8.785 3.642L20 20z"
        />
        <Path
          fill="#D80027"
          d="M3.871 8.173A19.9 19.9 0 0 0 .23 16.959L20 20zM.23 23.042a19.9 19.9 0 0 0 3.642 8.785L20 20zM39.77 16.959a19.9 19.9 0 0 0-3.642-8.786L20 20zM31.827 3.872A19.9 19.9 0 0 0 23.042.23L20 20zM36.128 31.827a19.9 19.9 0 0 0 3.642-8.785L20 20z"
        />
        <Path
          fill="#D80027"
          d="M20 26.956a6.956 6.956 0 1 0 0-13.912 6.956 6.956 0 0 0 0 13.912"
        />
        <Path
          fill="#FFDA44"
          d="M20 25.218a5.217 5.217 0 1 0 0-10.435 5.217 5.217 0 0 0 0 10.435"
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
Icon.displayName = 'NorthMacedonia'
/**
 * Flags by `Deji.Zeal`: North Macedonia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const NorthMacedonia = Icon
