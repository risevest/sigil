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
          d="M20 40c11.046 0 20-8.955 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#FFDA44"
          d="M33.5 5.245A19.93 19.93 0 0 0 20 0q-1.279.001-2.515.157L7.826 11.304.633 25.01a19.9 19.9 0 0 0 2.092 5.072L20 20z"
        />
        <Path
          fill="#6DA544"
          d="m36.652 31.081-27.982 5.4A19.9 19.9 0 0 0 20 40c6.948 0 13.067-3.542 16.652-8.919"
        />
        <Path
          fill="#D80027"
          d="M33.504 5.248 2.736 30.1a20 20 0 0 0 2.866 3.779L40 20c0-5.84-2.504-11.096-6.496-14.752"
        />
        <Path
          fill="#0052B4"
          d="M0 20c0 1.73.22 3.409.633 5.01L17.485.157C7.626 1.394 0 9.807 0 20"
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
Icon.displayName = 'Seychelles'
/**
 * Flags by `Deji.Zeal`: Seychelles
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Seychelles = Icon
