import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M12.93 4C15.69 4 17.93 6.24 17.93 9C17.93 10.06 17.54 11.32 16.93 12.62L18.42 14.11C19.3 12.36 19.93 10.57 19.93 9C19.93 5.13 16.8 2 12.93 2C11.09 2 9.42999 2.71 8.17999 3.86L9.60999 5.29C10.49 4.5 11.65 4 12.93 4ZM12.93 6.5C12.34 6.5 11.8 6.71 11.37 7.06L14.87 10.56C15.22 10.13 15.43 9.59 15.43 9C15.43 7.62 14.31 6.5 12.93 6.5ZM4.33999 2.86L2.92999 4.27L6.10999 7.45C5.99999 7.95 5.92999 8.47 5.92999 9C5.92999 14.25 12.93 22 12.93 22C12.93 22 14.6 20.15 16.31 17.65L19.66 21L21.07 19.59L4.33999 2.86ZM12.93 18.88C10.92 16.3 8.12999 12.14 7.94999 9.29L14.87 16.21C14.22 17.19 13.54 18.1 12.93 18.88Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'LocationOff'

/**
 * Material Icon: Location Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:location_off Material Icon Docs}
 */
export const LocationOff = memo(Icon)
