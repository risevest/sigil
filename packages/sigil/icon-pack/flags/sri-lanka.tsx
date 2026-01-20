import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const SriLanka = /* @__PURE__ */ memo(function SriLanka(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#FFDA44"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#FF9811"
          d="M15.653 3.478H8.73q-.46.315-.902.654L6.087 20l1.74 15.868q.441.339.902.654h6.924z"
        />
        <Path
          fill="#6DA544"
          d="M0 20c0 6.464 3.068 12.211 7.826 15.868V4.131C3.068 7.788 0 13.536 0 20"
        />
        <Path fill="#FFDA44" d="M32.174 12.192v.5l.018.004z" />
        <Path
          fill="#A2001D"
          d="M38.407 25.217h-3.768l-1.595 1.74v3.478h-3.478v-1.74h1.74v-3.478h-7.827v2.174h-1.74v-4.143a2.6 2.6 0 0 1-.869-1.944V10a2.61 2.61 0 0 1 2.61-2.609v16.087h3.477l1.194-.994a4.2 4.2 0 0 1-.324-1.614V18.26h-2.609v-5.217h5.218c0-.87 1.304-1.74 1.304-1.74s1.304.87 1.304 1.74v5.217c.968.012 2.505-.014 4.165 0a5.3 5.3 0 0 1-.687-2.609c0-1.534.663-2.914 1.718-3.868a20.1 20.1 0 0 0-6.967-8.306H18.262v33.044h13.011a20.04 20.04 0 0 0 7.822-10.554z"
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
 * Flags by `Deji.Zeal`: Sri Lanka
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { SriLanka }
