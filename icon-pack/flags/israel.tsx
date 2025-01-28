import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1374)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path
          d="M27.5311 15.6523H22.5106L20.0004 11.3044L17.4904 15.6523H12.4697L14.9802 20.0001L12.4697 24.3479H17.4904L20.0004 28.6957L22.5106 24.3479H27.5311L25.0207 20.0001L27.5311 15.6523ZM23.0844 20.0001L21.5425 22.671H18.4586L16.9164 20.0001L18.4585 17.3291H21.5425L23.0844 20.0001ZM20.0004 14.6581L20.5743 15.6522H19.4267L20.0004 14.6581ZM15.3743 17.3291H16.5221L15.9482 18.3232L15.3743 17.3291ZM15.3743 22.671L15.9483 21.6769L16.5222 22.671H15.3743ZM20.0004 25.3419L19.4266 24.3479H20.5743L20.0004 25.3419ZM24.6265 22.671H23.4787L24.0527 21.6769L24.6265 22.671ZM23.4787 17.3291H24.6265L24.0526 18.3232L23.4787 17.3291Z"
          fill={color}
        />
        <Path
          d="M32.4498 4.3479H7.55031C5.72508 5.80165 4.15977 7.56743 2.93555 9.56532H37.0646C35.8403 7.56751 34.275 5.80165 32.4498 4.3479V4.3479Z"
          fill={color}
        />
        <Path
          d="M7.55031 35.6522H32.4498C34.275 34.1985 35.8403 32.4327 37.0645 30.4348H2.93555C4.15984 32.4326 5.72516 34.1985 7.55031 35.6522V35.6522Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1374">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Israel'

/**
 * Flags by `Deji.Zeal`: Israel
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Israel = memo(Icon)
