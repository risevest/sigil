import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 5V9H5V5H9V3H5C3.9 3 3 3.9 3 5ZM5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15ZM19 19H15V21H19C20.1 21 21 20.1 21 19V15H19V19ZM19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3Z" />
    </Svg>
  )
}

Icon.displayName = 'CropFree'

/**
 * Material Icon: Crop Free
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:crop_free Material Icon Docs}
 */
export const CropFree = memo(Icon)
