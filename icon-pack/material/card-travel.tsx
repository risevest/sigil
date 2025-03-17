import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 6.5H17V4.5C17 3.39 16.11 2.5 15 2.5H9C7.89 2.5 7 3.39 7 4.5V6.5H4C2.89 6.5 2 7.39 2 8.5V19.5C2 20.61 2.89 21.5 4 21.5H20C21.11 21.5 22 20.61 22 19.5V8.5C22 7.39 21.11 6.5 20 6.5ZM9 4.5H15V6.5H9V4.5ZM20 19.5H4V17.5H20V19.5ZM20 14.5H4V8.5H7V10.5H9V8.5H15V10.5H17V8.5H20V14.5Z" />
    </Svg>
  )
}

Icon.displayName = 'CardTravel'

/**
 * Material Icon: Card Travel
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:card_travel Material Icon Docs}
 */
export const CardTravel = memo(Icon)
