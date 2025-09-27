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
          fill="#6DA544"
          d="M32.176 4.134A19.9 19.9 0 0 0 20 0 19.9 19.9 0 0 0 7.823 4.134L20 16.311z"
        />
        <Path
          fill="#000"
          d="M4.134 7.824A19.9 19.9 0 0 0 0 20c0 4.582 1.542 8.804 4.134 12.176L16.311 20z"
        />
        <Path
          fill="#6DA544"
          d="M7.823 35.866A19.9 19.9 0 0 0 20 40a19.9 19.9 0 0 0 12.176-4.134L20 23.69z"
        />
        <Path
          fill="#000"
          d="M35.866 32.176A19.9 19.9 0 0 0 40 20a19.9 19.9 0 0 0-4.134-12.176L23.69 20z"
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
Icon.displayName = 'Jamaica'
/**
 * Flags by `Deji.Zeal`: Jamaica
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Jamaica = Icon
