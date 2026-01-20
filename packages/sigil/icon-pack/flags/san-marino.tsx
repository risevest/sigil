import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const SanMarino = /* @__PURE__ */ memo(function SanMarino(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#338AF3"
          d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20c.87 0 20-2.609 20-2.609z"
        />
        <Path fill="#F0F0F0" d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20" />
        <Path
          fill="#6DA544"
          d="M27.94 13.8 20 21.74l-7.938-7.94a9.5 9.5 0 0 0-1.626 5.33v2.609c0 4.189 2.706 7.757 6.462 9.049a2.89 2.89 0 0 0 .318 3.125l2.843-2.278 2.842 2.278a2.89 2.89 0 0 0 .3-3.16c3.705-1.32 6.365-4.862 6.365-9.014V19.13a9.5 9.5 0 0 0-1.626-5.33"
        />
        <Path
          fill="#FFDA44"
          d="M20 28.696a6.964 6.964 0 0 1-6.957-6.957v-2.608A6.964 6.964 0 0 1 20 12.174a6.964 6.964 0 0 1 6.956 6.957v2.608A6.964 6.964 0 0 1 20 28.696"
        />
        <Path
          fill="#338AF3"
          d="M24.348 21.74v-2.61A4.353 4.353 0 0 0 20 14.784a4.353 4.353 0 0 0-4.348 4.348v2.608l4.348.87z"
        />
        <Path
          fill="#6DA544"
          d="M15.652 21.74A4.353 4.353 0 0 0 20 26.086a4.353 4.353 0 0 0 4.348-4.348z"
        />
        <Path
          fill="#FFDA44"
          d="M25.218 12.174a2.609 2.609 0 0 0-4.348-1.944V8.696h.87v-1.74h-.87v-.87h-1.739v.87h-.87v1.74h.87v1.534a2.609 2.609 0 0 0-3.478 3.888v1.534h8.695v-1.534c.534-.478.87-1.172.87-1.944"
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
 * Flags by `Deji.Zeal`: San Marino
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { SanMarino }
