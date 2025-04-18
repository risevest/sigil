import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 8V16H10V8H13ZM13 5H10C8.34 5 7 6.34 7 8V16C7 17.66 8.34 19 10 19H13C14.66 19 16 17.66 16 16V8C16 6.34 14.66 5 13 5ZM1 8H3V19H6V5H1V8ZM18.5 11C17.67 11 17 11.68 17 12.5V14.5C17 15.32 17.67 16 18.5 16H21V17H17V19H21.5C22.33 19 23 18.33 23 17.5V15.5C23 14.67 22.33 14 21.5 14H19V13H23V11H18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Timer10Select'

/**
 * Material Icon: Timer 10 Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:timer_10_select Material Icon Docs}
 */
export const Timer10Select = memo(Icon)
