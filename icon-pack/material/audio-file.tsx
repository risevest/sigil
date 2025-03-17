import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V9H18V20H6ZM16 11H12V14.88C11.64 14.64 11.21 14.5 10.75 14.5C9.51 14.5 8.5 15.51 8.5 16.75C8.5 17.99 9.51 19 10.75 19C11.99 19 13 17.99 13 16.75V13H16V11Z" />
    </Svg>
  )
}

Icon.displayName = 'AudioFile'

/**
 * Material Icon: Audio File
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:audio_file Material Icon Docs}
 */
export const AudioFile = memo(Icon)
