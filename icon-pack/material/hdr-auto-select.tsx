import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 16H6.5V22H10C10.8 22 11.5 21.3 11.5 20.5V17.5C11.5 16.7 10.8 16 10 16ZM10 20.5H8V17.5H10V20.5Z" />
      <Path d="M3.5 18H1.5V16H0V22H1.5V19.5H3.5V22H5V16H3.5V18Z" />
      <Path d="M22 18.5V16.5H20.5V18.5H18.5V20H20.5V22H22V20H24V18.5H22Z" />
      <Path d="M16.5 16H13V22H14.5V20H15.6L16.5 22H18L17.1 19.9C17.6 19.6 18 19.1 18 18.5V17.5C18 16.7 17.3 16 16.5 16ZM16.5 18.5H14.5V17.5H16.5V18.5Z" />
      <Path d="M11.97 5.3L10.95 8.19H13.05L12.03 5.3H11.97Z" />
      <Path d="M12 2C8.69 2 6 4.69 6 8C6 11.31 8.69 14 12 14C15.31 14 18 11.31 18 8C18 4.69 15.31 2 12 2ZM14.04 11L13.41 9.21H10.58L9.96 11H8.74L11.37 4H12.62L15.25 11H14.04Z" />
    </Svg>
  )
}

Icon.displayName = 'HdrAutoSelect'

/**
 * Material Icon: Hdr Auto Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hdr_auto_select Material Icon Docs}
 */
export const HdrAutoSelect = memo(Icon)
