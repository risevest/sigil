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
          d="M20 0C11.4 0 4.07 5.427 1.244 13.044h37.512C35.93 5.427 28.6 0 20 0"
        />
        <Path
          fill="#000"
          d="M20 40c8.6 0 15.93-5.428 18.756-13.044H1.244C4.07 34.572 11.401 40 20 40"
        />
        <Path
          fill="#FF9811"
          d="M26.956 17.826H21.74a1.74 1.74 0 0 0-3.479 0h-5.217c0 .96.837 1.74 1.797 1.74h-.058c0 .96.779 1.738 1.74 1.738 0 .96.778 1.74 1.738 1.74h3.479c.96 0 1.739-.78 1.739-1.74.96 0 1.739-.778 1.739-1.739h-.058c.96 0 1.797-.779 1.797-1.739"
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
Icon.displayName = 'Egypt'
/**
 * Flags by `Deji.Zeal`: Egypt
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Egypt = Icon
