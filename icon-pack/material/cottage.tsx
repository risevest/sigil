import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 4L6 8.58V7H4V10.11L1 12.4L2.21 13.99L4 12.62V22H20V12.62L21.79 13.98L23 12.4L12 4ZM18 20H13V16H11V20H6V11.1L12 6.52L18 11.1V20ZM10 2C10 3.66 8.66 5 7 5C6.45 5 6 5.45 6 6H4C4 4.34 5.34 3 7 3C7.55 3 8 2.55 8 2H10Z" />
    </Svg>
  )
}

Icon.displayName = 'Cottage'

/**
 * Material Icon: Cottage
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cottage Material Icon Docs}
 */
export const Cottage = memo(Icon)
