import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.04932 13H4.06184C4.55393 16.9463 7.92032 20 11.9999 20C16.0796 20 19.4459 16.9463 19.938 13H21.9506C21.4488 18.0533 17.1853 22 11.9999 22C6.81459 22 2.55104 18.0533 2.04932 13ZM2.04932 11C2.55104 5.94668 6.81459 2 11.9999 2C17.1853 2 21.4488 5.94668 21.9506 11H19.938C19.4459 7.05369 16.0796 4 11.9999 4C7.92032 4 4.55393 7.05369 4.06184 11H2.04932ZM11.9999 14C10.8954 14 9.99994 13.1046 9.99994 12C9.99994 10.8954 10.8954 10 11.9999 10C13.1045 10 13.9999 10.8954 13.9999 12C13.9999 13.1046 13.1045 14 11.9999 14Z" />
    </Svg>
  )
}

Icon.displayName = 'GradienterLine'

/**
 * Remix Icon: Gradienter Line
 * @see {@link https://remixicon.com/icon/gradienter-line Remix Icon Docs}
 */
export const GradienterLine = memo(Icon)
