import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.11501 2.50531L1.69501 3.91531L3.96501 6.18531C2.91501 7.76531 2.30501 9.65531 2.30501 11.6953C2.30501 17.2153 6.78501 21.6953 12.305 21.6953C14.345 21.6953 16.235 21.0853 17.815 20.0353L20.085 22.3053L21.495 20.8853L3.11501 2.50531ZM12.305 19.6953C7.89501 19.6953 4.30501 16.1053 4.30501 11.6953C4.30501 10.2153 4.71501 8.83531 5.42501 7.63531L16.355 18.5753C15.165 19.2853 13.785 19.6953 12.305 19.6953Z" />
      <Path d="M12.305 3.69531C16.715 3.69531 20.305 7.28531 20.305 11.6953C20.305 13.1753 19.895 14.5553 19.185 15.7453L20.635 17.1953C21.695 15.6253 22.305 13.7353 22.305 11.6953C22.305 6.17531 17.825 1.69531 12.305 1.69531C10.265 1.69531 8.37501 2.30531 6.79501 3.35531L8.24501 4.80531C9.44501 4.10531 10.825 3.69531 12.305 3.69531Z" />
    </Svg>
  )
}

Icon.displayName = 'MotionPhotosOff'

/**
 * Material Icon: Motion Photos Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:motion_photos_off Material Icon Docs}
 */
export const MotionPhotosOff = memo(Icon)
