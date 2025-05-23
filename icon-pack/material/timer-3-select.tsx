import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.5 11V13H16.5V14H19C19.83 14 20.5 14.68 20.5 15.5V17.5C20.5 18.33 19.83 19 19 19H14.5V17H18.5V16H16C15.18 16 14.5 15.32 14.5 14.5V12.5C14.5 11.68 15.18 11 16 11H20.5ZM3.5 5V8H9.5V10.5H3.5V13.5H9.5V16H3.5V19H9.5C11.16 19 12.5 17.66 12.5 16V14.1C12.5 12.94 11.56 12 10.4 12C11.56 12 12.5 11.06 12.5 9.9V8C12.5 6.34 11.16 5 9.5 5H3.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Timer3Select'

/**
 * Material Icon: Timer 3 Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:timer_3_select Material Icon Docs}
 */
export const Timer3Select = memo(Icon)
