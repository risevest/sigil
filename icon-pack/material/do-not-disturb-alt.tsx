import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM4 12C4 7.6 7.6 4 12 4C13.8 4 15.5 4.6 16.9 5.7L5.7 16.9C4.6 15.5 4 13.8 4 12ZM12 20C10.2 20 8.5 19.4 7.1 18.3L18.3 7.1C19.4 8.5 20 10.2 20 12C20 16.4 16.4 20 12 20Z" />
    </Svg>
  )
}

Icon.displayName = 'DoNotDisturbAlt'

/**
 * Material Icon: Do Not Disturb Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:do_not_disturb_alt Material Icon Docs}
 */
export const DoNotDisturbAlt = memo(Icon)
