import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#FFDA44"
          d="M28.696 1.985A19.9 19.9 0 0 0 20 0a19.9 19.9 0 0 0-8.695 1.985L9.565 20l1.74 18.016A19.9 19.9 0 0 0 20 40a19.9 19.9 0 0 0 8.696-1.984L30.435 20z"
        />
        <Path
          fill="#0052B4"
          d="M11.304 1.985C4.614 5.22 0 12.071 0 20s4.615 14.78 11.304 18.015zM28.695 1.985v36.03C35.385 34.78 40 27.929 40 20S35.385 5.22 28.695 1.985"
        />
        <Path
          fill="#000"
          d="m26.087 12.174 1.166.583zl-1.167-.583c-.07.14-1.594 3.24-1.843 7.974h-1.773v-7.391L20 10.434l-1.305 1.74v7.391h-1.773c-.249-4.734-1.772-7.834-1.843-7.974l-2.333 1.166c.016.032 1.602 3.26 1.602 8.112v1.305h4.347v7.391h2.61v-7.391h4.347v-1.305c0-2.509.434-4.578.798-5.872.397-1.41.8-2.235.805-2.243z"
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
Icon.displayName = 'Barbados'
/**
 * Flags by `Deji.Zeal`: Barbados
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Barbados = Icon
