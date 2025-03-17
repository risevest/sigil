import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z" />
    </Svg>
  )
}

Icon.displayName = 'TurnedInNot'

/**
 * Material Icon: Turned In Not
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:turned_in_not Material Icon Docs}
 */
export const TurnedInNot = memo(Icon)
