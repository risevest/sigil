import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 11V3H8V9H2V21H22V11H16ZM10 5H14V19H10V5ZM4 11H8V19H4V11ZM20 19H16V13H20V19Z" />
    </Svg>
  )
}

Icon.displayName = 'Leaderboard'

/**
 * Material Icon: Leaderboard
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:leaderboard Material Icon Docs}
 */
export const Leaderboard = memo(Icon)
