import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H10V23H12V1H10V3ZM10 18H5L10 12V18ZM19 3H14V5H19V18L14 12V21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" />
    </Svg>
  )
}

Icon.displayName = 'Compare'

/**
 * Material Icon: Compare
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:compare Material Icon Docs}
 */
export const Compare = memo(Icon)
