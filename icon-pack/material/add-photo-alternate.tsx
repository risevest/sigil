import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.5 20.5H3.5V6.5H12.5V4.5H3.5C2.4 4.5 1.5 5.4 1.5 6.5V20.5C1.5 21.6 2.4 22.5 3.5 22.5H17.5C18.6 22.5 19.5 21.6 19.5 20.5V11.5H17.5V20.5ZM9.71 17.33L7.75 14.97L5 18.5H16L12.46 13.79L9.71 17.33ZM19.5 4.5V1.5H17.5V4.5H14.5C14.51 4.51 14.5 6.5 14.5 6.5H17.5V9.49C17.51 9.5 19.5 9.49 19.5 9.49V6.5H22.5V4.5H19.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AddPhotoAlternate'

/**
 * Material Icon: Add Photo Alternate
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_photo_alternate Material Icon Docs}
 */
export const AddPhotoAlternate = memo(Icon)
