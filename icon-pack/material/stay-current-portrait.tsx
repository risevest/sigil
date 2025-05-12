import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M16.995 1.01L6.995 1C5.895 1 5.005 1.9 5.005 3V21C5.005 22.1 5.895 23 6.995 23H16.995C18.095 23 18.995 22.1 18.995 21V3C18.995 1.9 18.095 1.01 16.995 1.01ZM16.995 19H6.995V5H16.995V19Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'StayCurrentPortrait'

/**
 * Material Icon: Stay Current Portrait
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:stay_current_portrait Material Icon Docs}
 */
export const StayCurrentPortrait = memo(Icon)
