import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17C13 16.45 12.55 16 12 16C11.45 16 11 16.45 11 17ZM11 3V7H13V5.08C16.39 5.57 19 8.47 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 10.32 5.59 8.78 6.58 7.58L12 13L13.41 11.59L6.61 4.79V4.81C4.42 6.45 3 9.05 3 12C3 16.97 7.02 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3H11ZM18 12C18 11.45 17.55 11 17 11C16.45 11 16 11.45 16 12C16 12.55 16.45 13 17 13C17.55 13 18 12.55 18 12ZM6 12C6 12.55 6.45 13 7 13C7.55 13 8 12.55 8 12C8 11.45 7.55 11 7 11C6.45 11 6 11.45 6 12Z" />
    </Svg>
  )
}

Icon.displayName = 'AvTimer'

/**
 * Material Icon: Av Timer
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:av_timer Material Icon Docs}
 */
export const AvTimer = memo(Icon)
