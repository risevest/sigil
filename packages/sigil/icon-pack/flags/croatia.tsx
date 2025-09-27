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
          d="M40 20c0-2.447-.44-4.79-1.244-6.957L20 12.173l-18.756.87A20 20 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956l18.756.87 18.756-.87A20 20 0 0 0 40 20"
        />
        <Path
          fill="#0052B4"
          d="M20 40c8.6 0 15.93-5.427 18.756-13.044H1.244C4.07 34.573 11.401 40 20 40"
        />
        <Path
          fill="#D80027"
          d="M1.244 13.044h37.512C35.93 5.428 28.6 0 20 0S4.07 5.428 1.244 13.044"
        />
        <Path
          fill="#338AF3"
          d="M25.217 13.913h-3.479l.58-4.348 2.319-1.739 2.319 1.74v3.478zM14.782 13.913h3.478l-.58-4.348-2.318-1.739-2.319 1.74v3.478z"
        />
        <Path fill="#0052B4" d="M22.319 13.913H17.68V9.565L20 7.826l2.319 1.74z" />
        <Path
          fill="#F0F0F0"
          d="M13.043 13.044v9.565a6.95 6.95 0 0 0 2.797 5.573l1.217-.305 1.537 1.546a7 7 0 0 0 2.804.001l1.754-1.46 1.007.215a6.95 6.95 0 0 0 2.797-5.57v-9.565z"
        />
        <Path
          fill="#D80027"
          d="M13.043 13.044h2.783v2.782h-2.783zM18.608 13.044h2.783v2.782h-2.783zM24.173 13.044h2.782v2.782h-2.782zM15.825 15.826h2.783v2.782h-2.783zM21.39 15.826h2.783v2.782h-2.782zM13.043 18.608h2.783v2.782h-2.783zM15.825 21.39h2.783v2.783h-2.783zM18.608 18.608h2.783v2.782h-2.783zM24.173 18.608h2.782v2.782h-2.782zM21.39 21.39h2.783v2.783h-2.782z"
        />
        <Path
          fill="#D80027"
          d="M18.608 24.173h2.783v2.783h-2.783zM15.826 24.173h-2.603a6.9 6.9 0 0 0 1.351 2.783h1.252zM24.173 26.956h1.251a6.9 6.9 0 0 0 1.352-2.783h-2.603z"
        />
        <Path
          fill="#D80027"
          d="M15.825 26.956v1.214a6.9 6.9 0 0 0 2.783 1.255v-2.47zM21.39 26.956v2.47a6.9 6.9 0 0 0 2.783-1.256v-1.214z"
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
Icon.displayName = 'Croatia'
/**
 * Flags by `Deji.Zeal`: Croatia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Croatia = Icon
