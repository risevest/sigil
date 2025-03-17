import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.41 21L5 19.59L9.83 14.76C10.58 14.01 11 12.99 11 11.93V6.83L9.41 8.41L8 7L12 3L16 7L14.59 8.41L13 6.83V11.93C13 12.99 13.42 14.01 14.17 14.76L19 19.59L17.59 21L12 15.41L6.41 21Z" />
    </Svg>
  )
}

Icon.displayName = 'Merge'

/**
 * Material Icon: Merge
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:merge Material Icon Docs}
 */
export const Merge = memo(Icon)
