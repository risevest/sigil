import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H14V8H18V20ZM12 17C10.9 17 10 16.1 10 15V9.5C10 9.22 10.22 9 10.5 9C10.78 9 11 9.22 11 9.5V15H13V9.5C13 8.12 11.88 7 10.5 7C9.12 7 8 8.12 8 9.5V15C8 17.21 9.79 19 12 19C14.21 19 16 17.21 16 15V11H14V15C14 16.1 13.1 17 12 17Z" />
    </Svg>
  )
}

Icon.displayName = 'FilePresent'

/**
 * Material Icon: File Present
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:file_present Material Icon Docs}
 */
export const FilePresent = memo(Icon)
