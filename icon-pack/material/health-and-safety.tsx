import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.5 13H8V10H10.5V7.5H13.5V10H16V13H13.5V15.5H10.5V13ZM12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.39L12 4.14L18 6.39V11.09Z" />
    </Svg>
  )
}

Icon.displayName = 'HealthAndSafety'

/**
 * Material Icon: Health And Safety
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:health_and_safety Material Icon Docs}
 */
export const HealthAndSafety = memo(Icon)
