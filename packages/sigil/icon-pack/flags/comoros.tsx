import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Comoros = /* @__PURE__ */ memo(function Comoros(_props: IconProps) {
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
          d="M40 19.942H18.32c-4.305 4.305-6.908 7.628-9.566 10.286l11.304 1.018L37.6 29.507A19.9 19.9 0 0 0 40 20z"
        />
        <Path
          fill="#FFDA44"
          d="M8.754 10.377h28.782C34.134 4.192 27.557 0 20 0A19.93 19.93 0 0 0 5.888 5.83z"
        />
        <Path
          fill="#0052B4"
          d="M9.623 29.507c-1.798 1.798-2.493 3.305-3.794 4.605A19.94 19.94 0 0 0 20 40c7.605 0 14.218-4.244 17.6-10.493z"
        />
        <Path fill="#6DA544" d="M5.858 5.8c-7.81 7.81-7.81 20.474 0 28.284L20 19.942z" />
        <Path
          fill="#F0F0F0"
          d="M5.276 19.942a6.09 6.09 0 0 1 4.782-5.945 6.087 6.087 0 1 0 0 11.89 6.09 6.09 0 0 1-4.782-5.945"
        />
        <Path
          fill="#F0F0F0"
          d="m9.992 14.725.323.996h1.048l-.848.616.324.997-.847-.616-.848.616.324-.997-.848-.616h1.048zM9.992 17.334l.323.996h1.048l-.848.616.324.996-.847-.616-.848.616.324-.996-.848-.616h1.048zM9.992 19.942l.323.997h1.048l-.848.615.324.997-.847-.616-.848.616.324-.997-.848-.615h1.048z"
        />
        <Path
          fill="#F0F0F0"
          d="m9.992 22.55.323.997h1.048l-.848.616.324.997-.847-.616-.848.616.324-.997-.848-.616h1.048z"
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
 * Flags by `Deji.Zeal`: Comoros
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Comoros }
