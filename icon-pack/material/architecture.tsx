import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.35498 18.78L6.60498 21L8.22498 19.46L10.995 11.86C10.315 11.69 9.71498 11.35 9.22498 10.88L6.35498 18.78Z" />
      <Path d="M14.765 10.88C14.275 11.35 13.665 11.69 12.995 11.86L15.765 19.46L17.385 21L17.645 18.78L14.765 10.88Z" />
      <Path d="M14.995 8C14.995 6.7 14.155 5.6 12.995 5.18V3H10.995V5.18C9.83498 5.6 8.99498 6.7 8.99498 8C8.99498 9.66 10.335 11 11.995 11C13.655 11 14.995 9.66 14.995 8ZM11.995 9C11.445 9 10.995 8.55 10.995 8C10.995 7.45 11.445 7 11.995 7C12.545 7 12.995 7.45 12.995 8C12.995 8.55 12.545 9 11.995 9Z" />
    </Svg>
  )
}

Icon.displayName = 'Architecture'

/**
 * Material Icon: Architecture
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:architecture Material Icon Docs}
 */
export const Architecture = memo(Icon)
