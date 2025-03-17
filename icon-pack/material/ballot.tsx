import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 7.5H18V9.5H13V7.5ZM13 14.5H18V16.5H13V14.5ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM11 6H6V11H11V6ZM10 10H7V7H10V10ZM11 13H6V18H11V13ZM10 17H7V14H10V17Z" />
    </Svg>
  )
}

Icon.displayName = 'Ballot'

/**
 * Material Icon: Ballot
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:ballot Material Icon Docs}
 */
export const Ballot = memo(Icon)
