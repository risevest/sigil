import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM5.23 7.75C6.1 8.62 6.7 9.74 6.91 11H4.07C4.22 9.82 4.63 8.72 5.23 7.75ZM4.07 13H6.91C6.7 14.26 6.1 15.38 5.23 16.25C4.63 15.28 4.22 14.18 4.07 13ZM11 19.93C9.27 19.71 7.71 18.93 6.51 17.79C7.81 16.55 8.7 14.88 8.93 13H11V19.93ZM11 11H8.93C8.69 9.12 7.81 7.44 6.5 6.2C7.71 5.06 9.27 4.29 11 4.07V11ZM19.93 11H17.09C17.3 9.74 17.9 8.62 18.77 7.75C19.37 8.72 19.78 9.82 19.93 11ZM13 4.07C14.73 4.29 16.29 5.06 17.5 6.2C16.19 7.44 15.31 9.12 15.07 11H13V4.07ZM13 19.93V13H15.07C15.31 14.88 16.19 16.55 17.49 17.79C16.29 18.93 14.73 19.71 13 19.93ZM18.77 16.25C17.9 15.39 17.31 14.26 17.09 13H19.93C19.78 14.18 19.37 15.28 18.77 16.25Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsBasketball'

/**
 * Material Icon: Sports Basketball
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_basketball Material Icon Docs}
 */
export const SportsBasketball = memo(Icon)
