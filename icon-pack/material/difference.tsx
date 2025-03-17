import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.5 23H4.5C3.4 23 2.5 22.1 2.5 21V7H4.5V21H18.5V23ZM15 7V5H13V7H11V9H13V11H15V9H17V7H15ZM17 13H11V15H17V13ZM15.5 1H8.5C7.4 1 6.51 1.9 6.51 3L6.5 17C6.5 18.1 7.39 19 8.49 19H19.5C20.6 19 21.5 18.1 21.5 17V7L15.5 1ZM19.5 17H8.5V3H14.67L19.5 7.83V17Z" />
    </Svg>
  )
}

Icon.displayName = 'Difference'

/**
 * Material Icon: Difference
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:difference Material Icon Docs}
 */
export const Difference = memo(Icon)
