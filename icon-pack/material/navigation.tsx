import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 7.77L16.28 18.2L12.81 16.67L12 16.31L11.19 16.67L7.72 18.2L12 7.77ZM12 2.5L4.5 20.79L5.21 21.5L12 18.5L18.79 21.5L19.5 20.79L12 2.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Navigation'

/**
 * Material Icon: Navigation
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:navigation Material Icon Docs}
 */
export const Navigation = memo(Icon)
