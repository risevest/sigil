import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Canada = /* @__PURE__ */ memo(function Canada(_props: IconProps) {
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
          d="M40 20c0-7.93-4.615-14.78-11.305-18.016v36.031C35.385 34.78 40 27.93 40 20M0 20c0 7.93 4.614 14.78 11.304 18.015V1.985C4.614 5.218 0 12.07 0 20M23.478 22.609l3.478-1.74-1.74-.87v-1.738L21.74 20l1.739-3.479h-1.74L20 13.914l-1.74 2.608h-1.739L18.261 20l-3.479-1.74V20l-1.739.87 3.478 1.738-.87 1.74h3.479v2.608h1.739v-2.608h3.478z"
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
 * Flags by `Deji.Zeal`: Canada
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Canada }
