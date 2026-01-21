import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Burundi = /* @__PURE__ */ memo(function Burundi(_props: IconProps) {
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
          d="M32.178 4.133c-7.16-5.51-17.195-5.51-24.356 0L20 16.31zM20 23.69 7.822 35.866c7.16 5.51 17.196 5.51 24.356 0z"
        />
        <Path
          fill="#6DA544"
          d="M16.311 20 4.133 7.822c-5.51 7.16-5.51 17.196 0 24.356zM23.69 20l12.177 12.178c5.51-7.16 5.51-17.195 0-24.356z"
        />
        <Path
          fill="#F0F0F0"
          d="M20 28.696a8.696 8.696 0 1 0 0-17.391 8.696 8.696 0 0 0 0 17.39"
        />
        <Path
          fill="#D80027"
          d="m20 13.913.753 1.304h1.507l-.754 1.305.754 1.304h-1.507L20 19.131l-.753-1.305h-1.506l.753-1.304-.753-1.304h1.506zM16.172 20l.753 1.304h1.506l-.753 1.305.753 1.304h-1.506l-.753 1.304-.753-1.304h-1.506l.753-1.304-.753-1.305h1.506zM23.828 20l.753 1.304h1.506l-.753 1.305.753 1.304H24.58l-.753 1.304-.753-1.304h-1.507l.753-1.304-.753-1.305h1.506z"
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
 * Flags by `Deji.Zeal`: Burundi
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Burundi }
