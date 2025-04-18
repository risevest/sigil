import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.5 3H5C3.9 3 3 3.9 3 5V10.71C3 14.54 5.95 17.89 9.78 18C13.74 18.12 17 14.94 17 11V10H17.5C19.43 10 21 8.43 21 6.5C21 4.57 19.43 3 17.5 3ZM15 5V8H5V5H15ZM15 10V11C15 13.76 12.76 16 10 16C7.24 16 5 13.76 5 11V10M17.5 8H17V5H17.5C18.33 5 19 5.67 19 6.5C19 7.33 18.33 8 17.5 8ZM3 19H19V21H3V19Z" />
    </Svg>
  )
}

Icon.displayName = 'Coffee'

/**
 * Material Icon: Coffee
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:coffee Material Icon Docs}
 */
export const Coffee = memo(Icon)
