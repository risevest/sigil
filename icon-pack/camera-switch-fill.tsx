import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM14.6839 18.3677L13.7892 16.5785C13.2509 16.8482 12.6432 17 12 17C9.79086 17 8 15.2091 8 13H10L7.83875 8.67749C6.70523 9.76898 6 11.3021 6 13C6 16.3137 8.68629 19 12 19C12.9647 19 13.8763 18.7723 14.6839 18.3677ZM9.31613 7.63226L10.2108 9.42151C10.7491 9.15179 11.3568 9 12 9C14.2091 9 16 10.7909 16 13H14L16.1613 17.3225C17.2948 16.231 18 14.6979 18 13C18 9.68629 15.3137 7 12 7C11.0353 7 10.1237 7.22769 9.31613 7.63226Z" />
    </Svg>
  )
}

Icon.displayName = 'CameraSwitchFill'

/**
 * Remix Icon: Camera Switch Fill
 * @see {@link https://remixicon.com/icon/camera-switch-fill Remix Icon Docs}
 */
export const CameraSwitchFill = memo(Icon)
