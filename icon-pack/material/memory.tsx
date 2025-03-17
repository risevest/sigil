import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 9H9V15H15V9ZM13 13H11V11H13V13ZM21 11V9H19V7C19 5.9 18.1 5 17 5H15V3H13V5H11V3H9V5H7C5.9 5 5 5.9 5 7V9H3V11H5V13H3V15H5V17C5 18.1 5.9 19 7 19H9V21H11V19H13V21H15V19H17C18.1 19 19 18.1 19 17V15H21V13H19V11H21ZM17 17H7V7H17V17Z" />
    </Svg>
  )
}

Icon.displayName = 'Memory'

/**
 * Material Icon: Memory
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:memory Material Icon Docs}
 */
export const Memory = memo(Icon)
