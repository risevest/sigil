import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.66 14C19 15.92 17.42 17.54 15.26 18.39L14 18.89V20H10V18.89L8.73 18.39C6.57 17.54 4.99 15.92 4.33 14H19.66ZM22 2L4 3.99V12H2C2 15.69 4.47 18.86 8 20.25V22H16V20.25C19.53 18.86 22 15.69 22 12H10.5V8H22V6.5H10.5V4.78L22 3.51V2ZM8 6.5V5.06L9 4.95V6.5H8ZM5.5 6.5V5.34L6.5 5.23V6.5H5.5ZM8 12V8H9V12H8ZM5.5 12V8H6.5V12H5.5Z" />
    </Svg>
  )
}

Icon.displayName = 'RamenDining'

/**
 * Material Icon: Ramen Dining
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:ramen_dining Material Icon Docs}
 */
export const RamenDining = memo(Icon)
