import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 8C17.83 8 17.66 8.02 17.5 8.05V4.5C17.5 3.12 16.38 2 15 2C14.81 2 14.63 2.02 14.46 2.06C14.25 0.89 13.23 0 12 0C10.94 0 10.04 0.66 9.67 1.59C9.46 1.53 9.23 1.5 9 1.5C7.62 1.5 6.5 2.62 6.5 4V4.55C6.34 4.52 6.17 4.5 6 4.5C4.62 4.5 3.5 5.62 3.5 7V15.5C3.5 20.19 7.31 24 12 24C16.69 24 20.5 20.19 20.5 15.5V10.5C20.5 9.12 19.38 8 18 8ZM18.5 15.5C18.5 19.09 15.59 22 12 22C8.41 22 5.5 19.09 5.5 15.5V7C5.5 6.72 5.72 6.5 6 6.5C6.28 6.5 6.5 6.72 6.5 7V12H8.5V4C8.5 3.72 8.72 3.5 9 3.5C9.28 3.5 9.5 3.72 9.5 4V11H11.5V2.5C11.5 2.22 11.72 2 12 2C12.28 2 12.5 2.22 12.5 2.5V11H14.5V4.5C14.5 4.22 14.72 4 15 4C15.28 4 15.5 4.22 15.5 4.5V13.42C13.73 14.19 12.5 15.95 12.5 18H14.5C14.5 16.34 15.84 15 17.5 15V10.5C17.5 10.22 17.72 10 18 10C18.28 10 18.5 10.22 18.5 10.5V15.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FrontHand'

/**
 * Material Icon: Front Hand
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:front_hand Material Icon Docs}
 */
export const FrontHand = memo(Icon)
