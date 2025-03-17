import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.89 13.77L15.09 12.1C14.96 12.04 14.81 12 14.65 12H14V7.5C14 6.12 12.88 5 11.5 5C10.12 5 9 6.12 9 7.5V15.65L7.13 15.25C6.94 15.22 6.11 15.1 5.4 15.81L4 17.22L9.12 22.41C9.49 22.79 10 23 10.53 23H17.08C18.06 23 18.89 22.3 19.05 21.33L19.97 15.89C20.12 15.03 19.68 14.17 18.89 13.77ZM17.08 21H10.53L6.83 17.22L11 18.11V7.5C11 7.22 11.22 7 11.5 7C11.78 7 12 7.22 12 7.5V13.68H13.76L18 15.56L17.08 21ZM4.09 5.5H7V7H2V2H3.5V4.02C5.82 2.13 8.78 1 12 1C17.49 1 21.27 4.12 22 7H20.43C19.67 5.02 16.74 2.5 12 2.5C8.97 2.5 6.21 3.64 4.09 5.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SwipeLeft'

/**
 * Material Icon: Swipe Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:swipe_left Material Icon Docs}
 */
export const SwipeLeft = memo(Icon)
