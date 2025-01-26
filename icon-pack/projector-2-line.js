import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 19V21H20V19H4V21H2V19C1.44772 19 1 18.5523 1 18V6C1 5.44772 1.44772 5 2 5H12.5278C13.6264 3.7725 15.223 3 17 3C18.777 3 20.3736 3.7725 21.4722 5H22C22.5523 5 23 5.44772 23 6V18C23 18.5523 22.5523 19 22 19ZM11.3414 7H3V17H21V13.4722C19.9385 14.4223 18.5367 15 17 15C13.6863 15 11 12.3137 11 9C11 8.29873 11.1203 7.62556 11.3414 7ZM17 13C19.2091 13 21 11.2091 21 9C21 6.79086 19.2091 5 17 5C14.7909 5 13 6.79086 13 9C13 11.2091 14.7909 13 17 13ZM5 13H7V15H5V13ZM8 13H10V15H8V13Z" />
    </Svg>
  )
}

Icon.displayName = 'Projector2Line'

/**
 * Remix Icon: Projector 2 Line
 * @see {@link https://remixicon.com/icon/projector-2-line Remix Icon Docs}
 */
export const Projector2Line = memo(Icon)