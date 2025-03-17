import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 22H2V10L9 7V9L14 7V10H17L18 2H21L22 10V22ZM12 9.95L7 11.95V10L4 11.32V20H20V12H12V9.95ZM11 18H13V14H11V18ZM7 18H9V14H7V18ZM17 14H15V18H17V14Z" />
    </Svg>
  )
}

Icon.displayName = 'Factory'

/**
 * Material Icon: Factory
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:factory Material Icon Docs}
 */
export const Factory = memo(Icon)
