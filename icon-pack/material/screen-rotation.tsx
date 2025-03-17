import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5684)">
        <Path d="M16.48 2.52C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0L11.34 0.03L15.15 3.84L16.48 2.52ZM10.23 1.75C9.64 1.16 8.69 1.16 8.11 1.75L1.75 8.11C1.16 8.7 1.16 9.65 1.75 10.23L13.77 22.25C14.36 22.84 15.31 22.84 15.89 22.25L22.25 15.89C22.84 15.3 22.84 14.35 22.25 13.77L10.23 1.75ZM14.83 21.19L2.81 9.17L9.17 2.81L21.19 14.83L14.83 21.19ZM7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H0.0499992C0.559999 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.52 21.48Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5684">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'ScreenRotation'

/**
 * Material Icon: Screen Rotation
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:screen_rotation Material Icon Docs}
 */
export const ScreenRotation = memo(Icon)
