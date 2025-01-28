import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5859 21H3.00016C2.44787 21 2.00016 20.5523 2.00016 20V6.00003C2.00016 5.44775 2.44787 5.00003 3.00016 5.00003H3.58594L1.39355 2.80765L2.80777 1.39343L22.6068 21.1924L21.1925 22.6066L19.5859 21ZM7.55544 8.96953C6.58902 10.0346 6.00016 11.4486 6.00016 13C6.00016 16.3137 8.68645 19 12.0002 19C13.5516 19 14.9656 18.4112 16.0307 17.4448L14.6139 16.028C13.9129 16.6337 12.9993 17 12.0002 17C9.79102 17 8.00016 15.2092 8.00016 13C8.00016 12.0009 8.36649 11.0873 8.97217 10.3863L7.55544 8.96953ZM22.0002 17.7858L17.9549 13.7406C17.9848 13.4979 18.0002 13.2508 18.0002 13C18.0002 9.68633 15.3139 7.00003 12.0002 7.00003C11.7494 7.00003 11.5023 7.01541 11.2596 7.04528L8.10726 3.89293L9.00016 3.00003H15.0002L17.0002 5.00003H21.0002C21.5524 5.00003 22.0002 5.44775 22.0002 6.00003V17.7858ZM13.5085 9.29418C14.5045 9.69999 15.3002 10.4957 15.706 11.4917L13.5085 9.29418Z" />
    </Svg>
  )
}

Icon.displayName = 'CameraOffFill'

/**
 * Remix Icon: Camera Off Fill
 * @see {@link https://remixicon.com/icon/camera-off-fill Remix Icon Docs}
 */
export const CameraOffFill = memo(Icon)
