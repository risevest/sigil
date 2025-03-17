import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5078)">
        <Path d="M20 8.69043V4.00043H15.31L12 0.69043L8.69 4.00043H4V8.69043L0.690002 12.0004L4 15.3104V20.0004H8.69L12 23.3104L15.31 20.0004H20V15.3104L23.31 12.0004L20 8.69043ZM18 14.4804V18.0004H14.48L12 20.4804L9.52 18.0004H6V14.4804L3.52 12.0004L6 9.52043V6.00043H9.52L12 3.52043L14.48 6.00043H18V9.52043L20.48 12.0004L18 14.4804ZM12 6.50043C8.97 6.50043 6.5 8.97043 6.5 12.0004C6.5 15.0304 8.97 17.5004 12 17.5004C15.03 17.5004 17.5 15.0304 17.5 12.0004C17.5 8.97043 15.03 6.50043 12 6.50043ZM12 15.5004C10.07 15.5004 8.5 13.9304 8.5 12.0004C8.5 10.0704 10.07 8.50043 12 8.50043C13.93 8.50043 15.5 10.0704 15.5 12.0004C15.5 13.9304 13.93 15.5004 12 15.5004Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5078">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Brightness5'

/**
 * Material Icon: Brightness 5
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:brightness_5 Material Icon Docs}
 */
export const Brightness5 = memo(Icon)
