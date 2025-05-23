import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 6C4 4.9 4.9 4 6 4C7.1 4 8 4.9 8 6C8 7.1 7.1 8 6 8C4.9 8 4 7.1 4 6ZM6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14ZM12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM17.98 16C17.24 16 16.61 16.4 16.26 17H13.72C13.38 16.4 12.74 16 12 16C11.26 16 10.63 16.4 10.28 17H8.41L11.48 13.93C11.65 13.97 11.82 14 12 14C13.1 14 14 13.1 14 12C14 11.82 13.97 11.65 13.93 11.49L17.49 7.93C17.65 7.97 17.82 8 18 8C19.1 8 20 7.1 20 6C20 4.9 19.1 4 18 4C16.9 4 16 4.9 16 6C16 6.18 16.03 6.35 16.07 6.51L12.51 10.07C12.35 10.03 12.18 10 12 10C10.9 10 10 10.9 10 12C10 12.18 10.03 12.35 10.07 12.51L6.51 16.07C6.35 16.03 6.18 16 6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C6.74 20 7.37 19.6 7.72 19H10.29C10.63 19.6 11.27 20 12.01 20C12.75 20 13.38 19.6 13.73 19H16.28C16.62 19.6 17.26 20 18 20C19.1 20 20 19.1 20 18C19.98 16.9 19.08 16 17.98 16Z" />
    </Svg>
  )
}

Icon.displayName = 'Pattern'

/**
 * Material Icon: Pattern
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pattern Material Icon Docs}
 */
export const Pattern = memo(Icon)
