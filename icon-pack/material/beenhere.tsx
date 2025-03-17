import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 1H5C3.9 1 3.01 1.9 3.01 3L3 15.93C3 16.62 3.35 17.23 3.88 17.59L12 23L20.11 17.59C20.64 17.23 20.99 16.62 20.99 15.93L21 3C21 1.9 20.1 1 19 1ZM12 20.6L5 15.94V3H19V15.93L12 20.6ZM9.99 13.18L7.41 10.59L6 12L10 16L18 8L16.58 6.58L9.99 13.18Z" />
    </Svg>
  )
}

Icon.displayName = 'Beenhere'

/**
 * Material Icon: Beenhere
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:beenhere Material Icon Docs}
 */
export const Beenhere = memo(Icon)
