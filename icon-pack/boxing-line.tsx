import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 2C19.5376 2 22 4.46243 22 7.5V10C22 10.8881 21.6141 11.686 21.0009 12.2353L21 17C21 18.3059 20.1656 19.4169 19.0009 19.829L19 21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21L5.00009 19.8293C3.83485 19.4175 3 18.3063 3 17V6C3 3.79086 4.79086 2 7 2H16.5ZM9.5 11H5V17C5 17.5128 5.38604 17.9355 5.88338 17.9933L6 18H18C18.5128 18 18.9355 17.614 18.9933 17.1166L19 17V13L12.9644 13.0009C12.7214 14.6966 11.2629 16 9.5 16H6V14H9.5C10.2797 14 10.9204 13.4051 10.9931 12.6445L11 12.5C11 11.7203 10.4051 11.0796 9.64446 11.0069L9.5 11ZM16.5 4H7C5.94564 4 5.08183 4.81588 5.00549 5.85074L5 6V9H9.5C10.8962 9 12.1014 9.81751 12.6632 11H19C19.5128 11 19.9355 10.614 19.9933 10.1166L20 10V7.5C20 5.63144 18.5357 4.10487 16.692 4.00518L16.5 4Z" />
    </Svg>
  )
}

Icon.displayName = 'BoxingLine'

/**
 * Remix Icon: Boxing Line
 * @see {@link https://remixicon.com/icon/boxing-line Remix Icon Docs}
 */
export const BoxingLine = memo(Icon)
