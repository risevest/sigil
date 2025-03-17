import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 4H7V3H17V4ZM17 21H7V20H17V21ZM17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM7 6H17V18H7V6ZM16 11V9.14C16 8.51 15.55 8 15 8H9C8.45 8 8 8.51 8 9.14V11.1C8.55 11.1 9 11.55 9 12.1C9 12.65 8.55 13.1 8 13.1V14.86C8 15.49 8.45 16 9 16H15C15.55 16 16 15.49 16 14.86V13C15.45 13 15 12.55 15 12C15 11.45 15.45 11 16 11ZM12.5 14.5H11.5V13.5H12.5V14.5ZM12.5 12.5H11.5V11.5H12.5V12.5ZM12.5 10.5H11.5V9.5H12.5V10.5Z" />
    </Svg>
  )
}

Icon.displayName = 'BookOnline'

/**
 * Material Icon: Book Online
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:book_online Material Icon Docs}
 */
export const BookOnline = memo(Icon)
