import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Togo = /* @__PURE__ */ memo(function Togo(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#FFDA44"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#496E2D"
          d="M20 0c-.014 0-.87 8-.87 8h16.871c-3.648-4.858-9.457-8-16-8M20 40c6.544 0 12.353-3.143 16.002-8H4c3.649 4.857 9.458 8 16 8M39.6 16H19.13l.87 8h19.6c.262-1.293.4-2.63.4-4s-.138-2.708-.4-4"
        />
        <Path fill="#D80027" d="M20 24V0C8.954 0 0 8.954 0 20c0 1.37.138 2.708.4 4z" />
        <Path
          fill="#F0F0F0"
          d="m11.035 9.565 1.295 3.986h4.19l-3.39 2.463L14.425 20l-3.39-2.463L7.645 20l1.294-3.986-3.39-2.463h4.19z"
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
 * Flags by `Deji.Zeal`: Togo
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Togo }
