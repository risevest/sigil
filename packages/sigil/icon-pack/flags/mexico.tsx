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
          d="M40 20c0-7.93-4.615-14.78-11.305-18.015v36.03C35.385 34.782 40 27.93 40 20"
        />
        <Path
          fill="#6DA544"
          d="M0 20c0 7.93 4.614 14.78 11.304 18.016V1.985C4.614 5.22 0 12.07 0 20M14.782 20a5.217 5.217 0 0 0 10.435 0v-1.739H14.782z"
        />
        <Path
          fill="#FF9811"
          d="M26.956 16.522H21.74a1.74 1.74 0 0 0-3.479 0h-5.217c0 .96.837 1.739 1.797 1.739h-.058c0 .96.779 1.74 1.74 1.74 0 .96.778 1.738 1.738 1.738h3.479c.96 0 1.739-.778 1.739-1.739.96 0 1.739-.779 1.739-1.739h-.058c.96 0 1.797-.779 1.797-1.74"
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
Icon.displayName = 'Mexico'
/**
 * Flags by `Deji.Zeal`: Mexico
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Mexico = Icon
