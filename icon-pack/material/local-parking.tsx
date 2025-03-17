import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.5 3H5.5V21H9.5V15H12.5C15.81 15 18.5 12.31 18.5 9C18.5 5.69 15.81 3 12.5 3ZM12.7 11H9.5V7H12.7C13.8 7 14.7 7.9 14.7 9C14.7 10.1 13.8 11 12.7 11Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalParking'

/**
 * Material Icon: Local Parking
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_parking Material Icon Docs}
 */
export const LocalParking = memo(Icon)
