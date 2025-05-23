import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 6C14.61 6 16.89 7.86 17.4 10.43L17.7 11.93L19.22 12.04C20.78 12.15 22 13.45 22 15C22 16.65 20.65 18 19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.07 7.14 9.94 6 12 6ZM12 4C9.11 4 6.59 5.64 5.34 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.36 10.04C18.67 6.59 15.64 4 12 4Z" />
    </Svg>
  )
}

Icon.displayName = 'WbCloudy'

/**
 * Material Icon: Wb Cloudy
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wb_cloudy Material Icon Docs}
 */
export const WbCloudy = memo(Icon)
