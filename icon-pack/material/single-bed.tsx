import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 12C20 10.9 19.1 10 18 10V7C18 5.9 17.1 5 16 5H8C6.9 5 6 5.9 6 7V10C4.9 10 4 10.9 4 12V17H5.33L6 19H7L7.67 17H16.34L17 19H18L18.67 17H20V12ZM16 10H13V7H16V10ZM8 7H11V10H8V7ZM6 12H18V15H6V12Z" />
    </Svg>
  )
}

Icon.displayName = 'SingleBed'

/**
 * Material Icon: Single Bed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:single_bed Material Icon Docs}
 */
export const SingleBed = memo(Icon)
