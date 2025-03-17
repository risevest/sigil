import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C15.31 2 18 4.69 18 8C18 11.31 15.31 14 12 14C8.69 14 6 11.31 6 8C6 4.69 8.69 2 12 2ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM13 11H11V9H9V7H11V5H13V7H15V9H13V11ZM24 20H22V22H20.5V20H18.5V18.5H20.5V16.5H22V18.5H24V20ZM18 18.5C18 19.1 17.6 19.6 17.1 19.9L18 22H16.5L15.6 20H14.5V22H13V16H16.5C17.3 16 18 16.7 18 17.5V18.5ZM16.5 18.5V17.5H14.5V18.5H16.5ZM3.5 18V16H5V22H3.5V19.5H1.5V22H0V16H1.5V18H3.5ZM10 16C10.8 16 11.5 16.7 11.5 17.5V20.5C11.5 21.3 10.8 22 10 22H6.5V16H10ZM10 20.5V17.5H8V20.5H10Z" />
    </Svg>
  )
}

Icon.displayName = 'HdrEnhancedSelect'

/**
 * Material Icon: Hdr Enhanced Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hdr_enhanced_select Material Icon Docs}
 */
export const HdrEnhancedSelect = memo(Icon)
