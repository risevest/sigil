import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5.5 7.5H7.5V5.5H9V7.5H11V9H9V11H7.5V9H5.5V7.5ZM19 19H5L19 5V19ZM17 17V15.5H12V17H17Z" />
    </Svg>
  )
}

Icon.displayName = 'Iso'

/**
 * Material Icon: Iso
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:iso Material Icon Docs}
 */
export const Iso = memo(Icon)
