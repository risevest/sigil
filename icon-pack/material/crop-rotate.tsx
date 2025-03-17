import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5111)">
        <Path d="M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0C0.51 19.16 5.66 24 11.95 24C12.18 24 12.39 23.98 12.61 23.97L8.8 20.15L7.47 21.49ZM12.05 0C11.82 0 11.61 0.02 11.39 0.04L15.2 3.85L16.53 2.52C19.8 4.07 22.14 7.24 22.5 11H24C23.49 4.84 18.34 0 12.05 0ZM16 14H18V8C18 6.89 17.1 6 16 6H10V8H16V14ZM8 16V4H6V6H4V8H6V16C6 17.1 6.89 18 8 18H16V20H18V18H20V16H8Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5111">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'CropRotate'

/**
 * Material Icon: Crop Rotate
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:crop_rotate Material Icon Docs}
 */
export const CropRotate = memo(Icon)
