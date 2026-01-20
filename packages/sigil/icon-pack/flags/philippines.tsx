import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Philippines = /* @__PURE__ */ memo(function Philippines(_props: IconProps) {
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
          d="M20 0v20L5.857 34.142A19.94 19.94 0 0 0 20 40c11.045 0 20-8.954 20-20S20 0 20 0"
        />
        <Path
          fill="#0052B4"
          d="M20 0A19.94 19.94 0 0 0 5.857 5.858L20 20h20C40 8.954 31.045 0 20 0"
        />
        <Path
          fill="#FFDA44"
          d="m13.695 20-2.443-1.149 1.3-2.366-2.651.508-.337-2.68-1.847 1.971-1.847-1.97-.337 2.679-2.652-.508 1.3 2.366L1.74 20l2.443 1.149-1.3 2.365 2.652-.507.335 2.68 1.848-1.971 1.847 1.97.337-2.679 2.652.508-1.3-2.366zM5.333 7.826l.813 1.136 1.332-.421-.83 1.124.813 1.136-1.325-.442-.83 1.124.01-1.397-1.325-.441 1.332-.422zM5.333 28.517l.813 1.136 1.332-.422-.83 1.124.813 1.136-1.325-.441-.83 1.124.01-1.397-1.325-.442 1.332-.421zM16.928 18.172l-.813 1.136-1.332-.422.83 1.124-.813 1.136 1.325-.441.83 1.124-.01-1.397 1.325-.442-1.332-.421z"
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
/**
 * Flags by `Deji.Zeal`: Philippines
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Philippines }
