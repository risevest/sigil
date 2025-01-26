import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.99805 3C8.99805 4.65685 10.3412 6 11.998 6C13.6549 6 14.998 4.65685 14.998 3H20.998C21.5503 3 21.998 3.44772 21.998 4V11C21.998 11.5523 21.5503 12 20.998 12H18.997L18.998 20C18.998 20.5523 18.5503 21 17.998 21H5.99805C5.44576 21 4.99805 20.5523 4.99805 20L4.99705 11.999L2.99805 12C2.44576 12 1.99805 11.5523 1.99805 11V4C1.99805 3.44772 2.44576 3 2.99805 3H8.99805ZM19.998 4.999H16.581L16.5642 5.04018C15.8115 6.7223 14.1566 7.91251 12.2149 7.99538L11.998 8C9.96331 8 8.21245 6.7846 7.43186 5.04018L7.41405 4.999H3.99805V9.999L6.9968 9.998L6.99705 19H16.998L16.9968 10L19.998 9.999V4.999Z" />
    </Svg>
  )
}

Icon.displayName = 'TShirt2Line'

/**
 * Remix Icon: T Shirt 2 Line
 * @see {@link https://remixicon.com/icon/t-shirt-2-line Remix Icon Docs}
 */
export const TShirt2Line = memo(Icon)
