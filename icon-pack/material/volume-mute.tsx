import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5 8.83V15.17L12.33 13H9.5V11H12.33L14.5 8.83ZM16.5 4L11.5 9H7.5V15H11.5L16.5 20V4Z" />
    </Svg>
  )
}

Icon.displayName = 'VolumeMute'

/**
 * Material Icon: Volume Mute
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:volume_mute Material Icon Docs}
 */
export const VolumeMute = memo(Icon)
