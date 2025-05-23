import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 2.5C14.24 2.5 12 4.74 12 7.5C12 10.26 14.24 12.5 17 12.5C19.76 12.5 22 10.26 22 7.5C22 4.74 19.76 2.5 17 2.5ZM17.5 8.5H16.5V4.5H17.5V8.5ZM17.5 9.5V10.5H16.5V9.5H17.5ZM5 15C5 14.17 5.67 13.5 6.5 13.5C7.33 13.5 8 14.17 8 15C8 15.83 7.33 16.5 6.5 16.5C5.67 16.5 5 15.83 5 15ZM18 14.43C18.65 14.34 19.34 14.15 20 13.83V20.5C20 21.05 19.55 21.5 19 21.5H18C17.45 21.5 17 21.05 17 20.5V19.5H5V20.5C5 21.05 4.55 21.5 4 21.5H3C2.45 21.5 2 21.05 2 20.5V12.5L4.08 6.51C4.29 5.92 4.84 5.5 5.5 5.5H10.29C10.1 6.13 10 6.81 10 7.5H5.85L4.81 10.5H10.67C11.03 11.25 11.51 11.93 12.1 12.5H4V17.5H18V14.43ZM16.91 14.5C16.02 14.49 15.17 14.31 14.38 13.99C14.15 14.26 14 14.61 14 15C14 15.83 14.67 16.5 15.5 16.5C16.33 16.5 17 15.83 17 15C17 14.82 16.97 14.66 16.91 14.5Z" />
    </Svg>
  )
}

Icon.displayName = 'CarCrash'

/**
 * Material Icon: Car Crash
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:car_crash Material Icon Docs}
 */
export const CarCrash = memo(Icon)
