import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 16.5H15V10.5H19L12 3.5L5 10.5H9V16.5ZM12 6.33L14.17 8.5H13V14.5H11V8.5H9.83L12 6.33ZM5 18.5H19V20.5H5V18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Upload'

/**
 * Material Icon: Upload
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:upload Material Icon Docs}
 */
export const Upload = memo(Icon)
