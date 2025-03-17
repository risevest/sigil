import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 6.5H17C17 3.74 14.76 1.5 12 1.5C9.24 1.5 7 3.74 7 6.5H5C3.9 6.5 3 7.4 3 8.5V20.5C3 21.6 3.9 22.5 5 22.5H19C20.1 22.5 21 21.6 21 20.5V8.5C21 7.4 20.1 6.5 19 6.5ZM12 3.5C13.66 3.5 15 4.84 15 6.5H9C9 4.84 10.34 3.5 12 3.5ZM19 20.5H5V8.5H19V20.5ZM12 12.5C10.34 12.5 9 11.16 9 9.5H7C7 12.26 9.24 14.5 12 14.5C14.76 14.5 17 12.26 17 9.5H15C15 11.16 13.66 12.5 12 12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalMall'

/**
 * Material Icon: Local Mall
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_mall Material Icon Docs}
 */
export const LocalMall = memo(Icon)
