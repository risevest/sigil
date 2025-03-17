import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5077)">
        <Path d="M20 8.69043V4.00043H15.31L12 0.69043L8.69 4.00043H4V8.69043L0.690002 12.0004L4 15.3104V20.0004H8.69L12 23.3104L15.31 20.0004H20V15.3104L23.31 12.0004L20 8.69043ZM18 14.4804V18.0004H14.48L12 20.4804L9.52 18.0004H6V14.4804L3.52 12.0004L6 9.52043V6.00043H9.52L12 3.52043L14.48 6.00043H18V9.52043L20.48 12.0004L18 14.4804ZM12.29 7.00043C11.55 7.00043 10.84 7.17043 10.21 7.46043C11.93 8.25043 13.13 9.99043 13.13 12.0004C13.13 14.0104 11.93 15.7504 10.21 16.5404C10.84 16.8304 11.55 17.0004 12.29 17.0004C15.05 17.0004 17.29 14.7604 17.29 12.0004C17.29 9.24043 15.05 7.00043 12.29 7.00043Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5077">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Brightness4'

/**
 * Material Icon: Brightness 4
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:brightness_4 Material Icon Docs}
 */
export const Brightness4 = memo(Icon)
