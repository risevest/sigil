import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM7 9L8.41 10.41L11 7.83V16H13V7.83L15.59 10.41L17 9L12 4L7 9Z" />
    </Svg>
  )
}

Icon.displayName = 'FileUpload'

/**
 * Material Icon: File Upload
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:file_upload Material Icon Docs}
 */
export const FileUpload = memo(Icon)
