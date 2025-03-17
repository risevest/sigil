import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 9.5V11.5H20V9.5H4ZM16 4.5L14.59 3.09L13 4.67V1.5H11V4.69L9.39 3.11L8 4.5L12 8.5L16 4.5ZM4 14.5H20V12.5H4V14.5ZM8 19.5L9.39 20.89L11 19.31V22.5H13V19.33L14.59 20.92L16 19.5L12 15.5L8 19.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Compress'

/**
 * Material Icon: Compress
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:compress Material Icon Docs}
 */
export const Compress = memo(Icon)
