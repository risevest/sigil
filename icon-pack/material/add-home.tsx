import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.5 4.5L16.5 9V10C17.2 10 17.87 10.1 18.5 10.29V8L10.5 2L2.5 8V20H10.18C9.88 19.38 9.68 18.71 9.58 18H4.5V9L10.5 4.5Z" />
      <Path d="M16.5 12C13.74 12 11.5 14.24 11.5 17C11.5 19.76 13.74 22 16.5 22C19.26 22 21.5 19.76 21.5 17C21.5 14.24 19.26 12 16.5 12ZM19.5 17.5H17V20H16V17.5H13.5V16.5H16V14H17V16.5H19.5V17.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AddHome'

/**
 * Material Icon: Add Home
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_home Material Icon Docs}
 */
export const AddHome = memo(Icon)
