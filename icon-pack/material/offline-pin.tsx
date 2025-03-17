import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM7 15H17V17H7V15ZM10.3 11.2L8.4 9.3L7 10.7L10.3 14L17 7.3L15.6 5.9L10.3 11.2Z" />
    </Svg>
  )
}

Icon.displayName = 'OfflinePin'

/**
 * Material Icon: Offline Pin
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:offline_pin Material Icon Docs}
 */
export const OfflinePin = memo(Icon)
