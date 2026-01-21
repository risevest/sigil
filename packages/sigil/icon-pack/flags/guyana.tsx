import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Guyana = /* @__PURE__ */ memo(function Guyana(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#6DA544"
          d="M20 0c-3.536 0-6.857.919-9.74 2.529V37.47A19.9 19.9 0 0 0 20 40c11.046 0 20-8.954 20-20S31.046 0 20 0"
        />
        <Path
          fill="#F0F0F0"
          d="M10.32 2.496a20 20 0 0 0-3.178 2.186L22.46 20 7.142 35.318q-.165-.14-.329-.282a20 20 0 0 0 3.507 2.468L40 20z"
        />
        <Path
          fill="#FFDA44"
          d="M8.63 3.545q-.915.634-1.753 1.363L20 20 6.877 35.092q.838.729 1.754 1.363L36.577 20z"
        />
        <Path
          fill="#000"
          d="M7.141 4.682a20 20 0 0 0-1.284 1.176L18.261 20 5.857 34.142q.617.615 1.284 1.176L22.46 20z"
        />
        <Path fill="#D80027" d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284L20 20z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
/**
 * Flags by `Deji.Zeal`: Guyana
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Guyana }
