import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3V21H21V3H3ZM19 19H5V5H19V19ZM11 7H13V9H11V7ZM7 7H9V9H7V7ZM15 7H17V9H15V7ZM7 11H9V13H7V11ZM11 11H13V13H11V11ZM15 11H17V13H15V11Z" />
    </Svg>
  )
}

Icon.displayName = 'Margin'

/**
 * Material Icon: Margin
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:margin Material Icon Docs}
 */
export const Margin = memo(Icon)
