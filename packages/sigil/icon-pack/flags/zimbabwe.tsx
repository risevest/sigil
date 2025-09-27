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
          fill="#FFDA44"
          d="M38.085 11.453a20 20 0 0 0-4.078-5.726L20 4.347 5.992 5.728l-.133.133 5.594 5.594 8.547.26zM5.86 34.14q.109.111.221.22L20 35.652l13.919-1.292a20 20 0 0 0 4.126-5.726l-25.871-.808z"
        />
        <Path
          fill="#000"
          d="m39.8 17.18-23.278-.658L20 20l-3.479 3.478 23.268-.571a20.2 20.2 0 0 0 .012-5.727"
        />
        <Path
          fill="#6DA544"
          d="M20 0C14.545 0 9.6 2.185 5.992 5.727h28.016A19.93 19.93 0 0 0 20 0"
        />
        <Path
          fill="#D80027"
          d="M17.182 17.18h22.62a19.9 19.9 0 0 0-1.715-5.727H11.455zM11.367 28.634h26.679a19.9 19.9 0 0 0 1.744-5.727H17.094z"
        />
        <Path
          fill="#6DA544"
          d="M20 40c5.411 0 10.32-2.15 13.92-5.64H6.081C9.682 37.85 14.59 40 20.001 40"
        />
        <Path
          fill="#000"
          d="M7.141 4.682q-.667.561-1.284 1.176L20 20 5.857 34.142q.617.615 1.284 1.176L22.46 20z"
        />
        <Path
          fill="#D80027"
          d="m8.04 14.783 1.295 3.985h4.191l-3.39 2.464 1.295 3.986-3.39-2.464-3.391 2.464 1.295-3.986-3.39-2.464h4.19z"
        />
        <Path
          fill="#FFDA44"
          d="M11.602 20.326 8.228 19.13s-.25-2.339-.265-2.418a1.305 1.305 0 1 0-2.538.589l-.946.953H6.16C6.161 20 4.858 20 4.858 21.739l.723 1.74h4.348l.724-1.74a1.7 1.7 0 0 0 .135-.51c.624-.253.814-.903.814-.903"
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
Icon.displayName = 'Zimbabwe'
/**
 * Flags by `Deji.Zeal`: Zimbabwe
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Zimbabwe = Icon
