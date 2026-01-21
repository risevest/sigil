import { memo } from 'react'
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const BosniaAndHerzegovina = /* @__PURE__ */ memo(function BosniaAndHerzegovina(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Rect width={40} height={40} fill="#FECB00" rx={20} />
        <Path fill="#002395" d="m-2.97-1.24 46.086 42.552L29.55 56.006l-46.086-42.551z" />
        <Path fill="#FECB00" d="M13.167-13.6 59.253 28.95 45.686 43.645-.4 1.095z" />
        <Path
          fill="#fff"
          d="m8.405 10.377-2.29 1.789.993 2.731-2.41-1.626-2.29 1.789.802-2.794L.801 10.64l2.905-.1.802-2.793.993 2.73zM13.805 16.177l-2.29 1.789.993 2.731-2.41-1.626-2.29 1.789.802-2.794-2.409-1.626 2.905-.1.802-2.793.993 2.73zM20.205 21.777l-2.29 1.789.993 2.731-2.41-1.626-2.29 1.789.802-2.794-2.409-1.626 2.905-.1.802-2.793.993 2.73zM26.605 27.177l-2.29 1.789.993 2.731-2.41-1.626-2.29 1.789.802-2.794-2.409-1.626 2.905-.1.802-2.793.993 2.73zM32.205 32.977l-2.29 1.789.993 2.731-2.41-1.626-2.29 1.789.802-2.794-2.409-1.626 2.905-.1.802-2.793.993 2.73z"
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
 * Flags by `Deji.Zeal`: Bosnia And Herzegovina
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { BosniaAndHerzegovina }
