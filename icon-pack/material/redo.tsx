import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.63 11.1C16.78 9.49 14.38 8.5 11.73 8.5C7.07999 8.5 3.14999 11.53 1.76999 15.72L4.12999 16.5C5.17999 13.31 8.17999 11 11.73 11C13.68 11 15.46 11.72 16.85 12.88L13.23 16.5H22.23V7.5L18.63 11.1Z" />
    </Svg>
  )
}

Icon.displayName = 'Redo'

/**
 * Material Icon: Redo
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:redo Material Icon Docs}
 */
export const Redo = memo(Icon)
