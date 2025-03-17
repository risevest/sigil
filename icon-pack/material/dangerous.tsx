import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3ZM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5H14.9L19 9.1V14.9ZM14.83 7.76L12 10.59L9.17 7.76L7.76 9.17L10.59 12L7.76 14.83L9.17 16.24L12 13.41L14.83 16.24L16.24 14.83L13.41 12L16.24 9.17L14.83 7.76Z" />
    </Svg>
  )
}

Icon.displayName = 'Dangerous'

/**
 * Material Icon: Dangerous
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:dangerous Material Icon Docs}
 */
export const Dangerous = memo(Icon)
