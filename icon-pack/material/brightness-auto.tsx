import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5591)">
        <Path d="M11 7.00043L7.8 16.0004H9.7L10.4 14.0004H13.6L14.3 16.0004H16.2L13 7.00043H11ZM10.85 12.6504L12 9.00043L13.15 12.6504H10.85ZM20 8.69043V4.00043H15.31L12 0.69043L8.69 4.00043H4V8.69043L0.690002 12.0004L4 15.3104V20.0004H8.69L12 23.3104L15.31 20.0004H20V15.3104L23.31 12.0004L20 8.69043ZM18 14.4804V18.0004H14.48L12 20.4804L9.52 18.0004H6V14.4804L3.52 12.0004L6 9.52043V6.00043H9.52L12 3.52043L14.48 6.00043H18V9.52043L20.48 12.0004L18 14.4804Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5591">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'BrightnessAuto'

/**
 * Material Icon: Brightness Auto
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:brightness_auto Material Icon Docs}
 */
export const BrightnessAuto = memo(Icon)
