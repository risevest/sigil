import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM4 9H14.5V12.5H4V9ZM4 14.5H14.5V18H4V14.5ZM20 18H16.5V9H20V18Z" />
    </Svg>
  )
}

Icon.displayName = 'Web'

/**
 * Material Icon: Web
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:web Material Icon Docs}
 */
export const Web = memo(Icon)
