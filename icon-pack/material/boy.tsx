import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 7.5C12.97 7.5 13.75 6.72 13.75 5.75C13.75 4.78 12.97 4 12 4C11.03 4 10.25 4.78 10.25 5.75C10.25 6.72 11.03 7.5 12 7.5ZM14 20V15H15V10.5C15 9.4 14.1 8.5 13 8.5H11C9.9 8.5 9 9.4 9 10.5V15H10V20H14Z" />
    </Svg>
  )
}

Icon.displayName = 'Boy'

/**
 * Material Icon: Boy
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:boy Material Icon Docs}
 */
export const Boy = memo(Icon)
