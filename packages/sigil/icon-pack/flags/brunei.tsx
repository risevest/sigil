import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Brunei = /* @__PURE__ */ memo(function Brunei(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 39.997c11.044 0 19.997-8.953 19.997-19.997S31.044.003 20 .003.003 8.956.003 20 8.956 39.997 20 39.997"
        />
        <Path
          fill="#000"
          d="M2.682 10.002A20 20 0 0 0 .67 14.863l33.443 19.309a20 20 0 0 0 3.205-4.173z"
        />
        <Path
          fill="#FFDA44"
          d="M29.998 2.682c-8.001-4.62-17.867-3.08-24.111 3.146L39.33 25.136C41.6 16.616 38 7.302 29.997 2.682M10.002 37.318c8 4.62 17.867 3.08 24.111-3.146L.67 14.864C-1.6 23.384 2 32.698 10.002 37.318"
        />
        <Path
          fill="#D80027"
          d="M25.65 17.826a5.651 5.651 0 1 1-10.623-2.688 6.956 6.956 0 1 0 9.944 0c.434.8.68 1.715.68 2.688"
        />
        <Path fill="#D80027" d="M18.695 11.306h2.609v13.041h-2.609z" />
        <Path
          fill="#D80027"
          d="M24.347 13.914h-8.695c0 .6.523 1.087 1.123 1.087h-.036c0 .6.487 1.087 1.087 1.087 0 .6.487 1.086 1.087 1.086h2.173c.6 0 1.087-.486 1.087-1.086.6 0 1.087-.487 1.087-1.087h-.036c.6 0 1.123-.487 1.123-1.087M13.914 25.217h12.172v2.608H13.914z"
        />
        <Path
          fill="#D80027"
          d="M22.608 26.086h5.217v2.609h-5.217zM12.175 26.086h5.216v2.609h-5.216z"
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
 * Flags by `Deji.Zeal`: Brunei
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Brunei }
