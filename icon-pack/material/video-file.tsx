import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V9H18V20H6ZM14 14L16 12.94V17.06L14 16V17C14 17.55 13.55 18 13 18H9C8.45 18 8 17.55 8 17V13C8 12.45 8.45 12 9 12H13C13.55 12 14 12.45 14 13V14Z" />
    </Svg>
  )
}

Icon.displayName = 'VideoFile'

/**
 * Material Icon: Video File
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:video_file Material Icon Docs}
 */
export const VideoFile = memo(Icon)
