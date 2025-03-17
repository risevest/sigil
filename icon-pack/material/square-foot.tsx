import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.66 17.66L16.6 18.72L15.89 18.01L16.95 16.95L15.01 15.01L13.95 16.07L13.24 15.36L14.3 14.3L12.36 12.36L11.3 13.42L10.59 12.71L11.65 11.65L9.7 9.7L8.64 10.76L7.93 10.05L8.99 8.99L7.05 7.05L5.99 8.11L5.28 7.4L6.34 6.34L4 4V18C4 19.1 4.9 20 6 20H20L17.66 17.66ZM7 17V11.24L12.76 17H7Z" />
    </Svg>
  )
}

Icon.displayName = 'SquareFoot'

/**
 * Material Icon: Square Foot
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:square_foot Material Icon Docs}
 */
export const SquareFoot = memo(Icon)
