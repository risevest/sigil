import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M23 2.5H1L12 21.5L23 2.5ZM19.53 4.5L17.79 7.5H6.21L4.47 4.5H19.53ZM10.26 14.5H13.74L12 17.51L10.26 14.5ZM14.9 12.5H9.1L7.36 9.5H16.63L14.9 12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Tornado'

/**
 * Material Icon: Tornado
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tornado Material Icon Docs}
 */
export const Tornado = memo(Icon)
