import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.25 7.97V16.02C17.73 15.29 18.75 13.77 18.75 12C18.75 10.23 17.73 8.71 16.25 7.97ZM5.25 9V15H9.25L14.25 20V4L9.25 9H5.25ZM12.25 8.83V15.17L10.08 13H7.25V11H10.08L12.25 8.83Z" />
    </Svg>
  )
}

Icon.displayName = 'VolumeDown'

/**
 * Material Icon: Volume Down
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:volume_down Material Icon Docs}
 */
export const VolumeDown = memo(Icon)
