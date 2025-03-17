import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.5 22C16.55 22 17.55 21.84 18.5 21.54C14.44 20.27 11.5 16.48 11.5 12C11.5 7.52 14.44 3.73 18.5 2.46C17.55 2.16 16.55 2 15.5 2C9.98 2 5.5 6.48 5.5 12C5.5 17.52 9.98 22 15.5 22Z" />
    </Svg>
  )
}

Icon.displayName = 'NightlightRound'

/**
 * Material Icon: Nightlight Round
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nightlight_round Material Icon Docs}
 */
export const NightlightRound = memo(Icon)
