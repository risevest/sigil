import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.22 7C9.7 6.47 10 5.77 10 5C10 3.34 8.66 2 7 2C5.34 2 4 3.34 4 5C4 5.77 4.3 6.47 4.78 7H9.22Z" />
      <Path d="M16 2C13.79 2 12 3.79 12 6V18C12 19.1 11.1 20 10 20C8.9 20 8 19.1 8 18H9L10 8H4L5 18H6C6 20.21 7.79 22 10 22C12.21 22 14 20.21 14 18V6C14 4.9 14.9 4 16 4C17.1 4 18 4.9 18 6V22H20V6C20 3.79 18.21 2 16 2ZM7.19 16H6.81L6.21 10H7.79L7.19 16Z" />
    </Svg>
  )
}

Icon.displayName = 'MicExternalOn'

/**
 * Material Icon: Mic External On
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mic_external_on Material Icon Docs}
 */
export const MicExternalOn = memo(Icon)
