import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.88 11.54L8.92 16.5L7.51 15.09L12.47 10.13L10.34 8L15.99 8.01L16 13.66L13.88 11.54Z" />
    </Svg>
  )
}

Icon.displayName = 'Outbound'

/**
 * Material Icon: Outbound
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:outbound Material Icon Docs}
 */
export const Outbound = memo(Icon)
