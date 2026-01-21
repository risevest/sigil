import { memo } from 'react'
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Slovenia = /* @__PURE__ */ memo(function Slovenia(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Rect width={40} height={40} fill="#D72727" rx={20} />
        <Path fill="#0E55BD" d="M-7 13h54.2v14.2H-7z" />
        <Path fill="#FF1512" d="M-7 27.2h54.2v14.2H-7z" />
        <Path fill="#F1F1F1" d="M-7-1.2h54.2V13H-7z" />
        <Path
          fill="#0E55BD"
          d="M8.4 7.8c3.557-.79 7.243-.79 10.8 0v1.575c0 4.596-1.965 8.972-5.4 12.025A16.09 16.09 0 0 1 8.4 9.375z"
        />
        <Path
          fill="#F1F1F1"
          d="M11.65 14.576 9.8 17.5l.983.588.867 1.512 1.2 1.003.95.597.35-.597 1.4-1.194L17 18.089l.6-.588-1.65-2.924-.75.895-1.4-1.671-1.4 1.67z"
        />
        <Path
          fill="#FF1512"
          fillRule="evenodd"
          d="M8.8 7.8v3.77a10.8 10.8 0 0 0 3.625 8.072l1.375 1.223 1.375-1.223A10.8 10.8 0 0 0 18.8 11.57V7.8h.8v3.77a11.6 11.6 0 0 1-3.893 8.67L13.8 21.935l-1.907-1.695A11.6 11.6 0 0 1 8 11.57V7.8z"
          clipRule="evenodd"
        />
        <Path
          fill="#F7D200"
          d="m13.8 7.8.496 1.74 1.756-.44-1.259 1.3 1.259 1.3-1.755-.44L13.8 13l-.497-1.74-1.755.44 1.259-1.3-1.259-1.3 1.755.44z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect width={40} height={40} fill="#fff" rx={20} />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
/**
 * Flags by `Deji.Zeal`: Slovenia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Slovenia }
