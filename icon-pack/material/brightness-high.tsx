import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5592)">
        <Path d="M20 8.69043V4.00043H15.31L12 0.69043L8.69 4.00043H4V8.69043L0.690002 12.0004L4 15.3104V20.0004H8.69L12 23.3104L15.31 20.0004H20V15.3104L23.31 12.0004L20 8.69043ZM18 14.4804V18.0004H14.48L12 20.4804L9.52 18.0004H6V14.4804L3.52 12.0004L6 9.52043V6.00043H9.52L12 3.52043L14.48 6.00043H18V9.52043L20.48 12.0004L18 14.4804ZM12 6.00043C8.69 6.00043 6 8.69043 6 12.0004C6 15.3104 8.69 18.0004 12 18.0004C15.31 18.0004 18 15.3104 18 12.0004C18 8.69043 15.31 6.00043 12 6.00043ZM12 16.0004C9.79 16.0004 8 14.2104 8 12.0004C8 9.79043 9.79 8.00043 12 8.00043C14.21 8.00043 16 9.79043 16 12.0004C16 14.2104 14.21 16.0004 12 16.0004Z" />
        <Path d="M12 14.5004C13.3807 14.5004 14.5 13.3811 14.5 12.0004C14.5 10.6197 13.3807 9.50043 12 9.50043C10.6193 9.50043 9.5 10.6197 9.5 12.0004C9.5 13.3811 10.6193 14.5004 12 14.5004Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5592">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'BrightnessHigh'

/**
 * Material Icon: Brightness High
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:brightness_high Material Icon Docs}
 */
export const BrightnessHigh = memo(Icon)
