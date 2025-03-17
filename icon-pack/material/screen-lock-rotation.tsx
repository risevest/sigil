import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5683)">
        <Path d="M22.9037 13.27L20.3337 10.7L18.9237 12.11L21.1437 14.33L15.4837 19.99L4.16375 8.67L9.82375 3.01L11.9237 5.11L13.3337 3.7L10.8837 1.25C10.2937 0.66 9.34375 0.66 8.76375 1.25L2.40375 7.61C1.81375 8.2 1.81375 9.15 2.40375 9.73L14.4237 21.75C15.0137 22.34 15.9637 22.34 16.5437 21.75L22.9037 15.39C23.4937 14.8 23.4937 13.85 22.9037 13.27ZM8.12375 20.98C4.85375 19.44 2.51375 16.26 2.15375 12.5H0.653748C1.16375 18.66 6.31375 23.5 12.6037 23.5L13.2637 23.47L9.45375 19.65L8.12375 20.98ZM15.6537 9.5H20.6537C21.2037 9.5 21.6537 9.05 21.6537 8.5V4.5C21.6537 3.95 21.2037 3.5 20.6537 3.5V3C20.6537 1.62 19.5337 0.5 18.1537 0.5C16.7737 0.5 15.6537 1.62 15.6537 3V3.5C15.1037 3.5 14.6537 3.95 14.6537 4.5V8.5C14.6537 9.05 15.1037 9.5 15.6537 9.5ZM16.4537 3C16.4537 2.06 17.2137 1.3 18.1537 1.3C19.0937 1.3 19.8537 2.06 19.8537 3V3.5H16.4537V3Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5683">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'ScreenLockRotation'

/**
 * Material Icon: Screen Lock Rotation
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:screen_lock_rotation Material Icon Docs}
 */
export const ScreenLockRotation = memo(Icon)
