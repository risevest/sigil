import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.84 4H16.5V9.66H14.5V7.41L9.5 12.41V20H7.5V12.42C7.5 11.89 7.71 11.38 8.09 11.01L13.09 6.01H10.84V4Z" />
    </Svg>
  )
}

Icon.displayName = 'TurnSlightRight'

/**
 * Material Icon: Turn Slight Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:turn_slight_right Material Icon Docs}
 */
export const TurnSlightRight = memo(Icon)
