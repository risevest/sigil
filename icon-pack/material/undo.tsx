import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.265 8.5C9.61501 8.5 7.21501 9.49 5.36501 11.1L1.76501 7.5V16.5H10.765L7.14501 12.88C8.53501 11.72 10.305 11 12.265 11C15.805 11 18.815 13.31 19.865 16.5L22.235 15.72C20.845 11.53 16.915 8.5 12.265 8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Undo'

/**
 * Material Icon: Undo
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:undo Material Icon Docs}
 */
export const Undo = memo(Icon)
