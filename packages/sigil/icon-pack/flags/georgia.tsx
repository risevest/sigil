import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Georgia = /* @__PURE__ */ memo(function Georgia(_props: IconProps) {
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
          d="M39.83 17.391H22.61V.17a20.2 20.2 0 0 0-5.218 0v17.222H.17a20.2 20.2 0 0 0 0 5.218h17.222V39.83a20.2 20.2 0 0 0 5.218 0V22.609H39.83a20.2 20.2 0 0 0 0-5.218"
        />
        <Path
          fill="#D80027"
          d="M12.174 9.565V6.957h-2.61v2.608H6.957v2.609h2.609v2.609h2.609v-2.609h2.608V9.565zM30.435 9.565V6.957h-2.609v2.608h-2.608v2.609h2.608v2.609h2.61v-2.609h2.608V9.565zM12.174 27.826v-2.608h-2.61v2.608H6.957v2.609h2.609v2.609h2.609v-2.61h2.608v-2.608zM30.435 27.826v-2.608h-2.609v2.608h-2.608v2.609h2.608v2.609h2.61v-2.61h2.608v-2.608z"
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
 * Flags by `Deji.Zeal`: Georgia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Georgia }
