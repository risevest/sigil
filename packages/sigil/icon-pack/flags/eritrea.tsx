import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#338AF3"
          d="M18.26 18.26S5.87 34.146 5.858 34.143A19.94 19.94 0 0 0 20 40c11.045 0 20-8.954 20-20z"
        />
        <Path
          fill="#6DA544"
          d="M18.26 20S5.87 5.855 5.858 5.858A19.94 19.94 0 0 1 20 0c11.045 0 20 8.954 20 20z"
        />
        <Path
          fill="#D80027"
          d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284C5.858 34.145 40 20 40 20z"
        />
        <Path
          fill="#FFDA44"
          d="M10.435 11.74a6.964 6.964 0 0 0-6.956 6.956v2.608a6.964 6.964 0 0 0 6.956 6.957 6.964 6.964 0 0 0 6.957-6.957v-2.608a6.964 6.964 0 0 0-6.957-6.957m4.348 9.564a4.355 4.355 0 0 1-3.044 4.148v-2.843l1.846-1.846-1.845-1.844v-1.527H9.13V20l-1.844 1.844 1.845 1.845v1.763a4.355 4.355 0 0 1-3.044-4.148v-2.608a4.353 4.353 0 0 1 4.348-4.348 4.353 4.353 0 0 1 4.348 4.348z"
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
Icon.displayName = 'Eritrea'
/**
 * Flags by `Deji.Zeal`: Eritrea
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Eritrea = Icon
