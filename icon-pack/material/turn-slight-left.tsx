import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.16 4H7.5V9.66H9.5V7.41L14.5 12.41V20H16.5V12.42C16.5 11.89 16.29 11.38 15.91 11.01L10.91 6.01H13.16V4Z" />
    </Svg>
  )
}

Icon.displayName = 'TurnSlightLeft'

/**
 * Material Icon: Turn Slight Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:turn_slight_left Material Icon Docs}
 */
export const TurnSlightLeft = memo(Icon)
