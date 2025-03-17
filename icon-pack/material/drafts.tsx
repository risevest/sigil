import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.99 9.5C21.99 8.78 21.62 8.15 21.05 7.8L12 2.5L2.95 7.8C2.38 8.15 2 8.78 2 9.5V19.5C2 20.6 2.9 21.5 4 21.5H20C21.1 21.5 22 20.6 22 19.5L21.99 9.5ZM19.99 9.5V9.51L12 14.5L4 9.5L12 4.82L19.99 9.5ZM4 19.5V11.84L12 16.86L19.99 11.87L20 19.5H4Z" />
    </Svg>
  )
}

Icon.displayName = 'Drafts'

/**
 * Material Icon: Drafts
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:drafts Material Icon Docs}
 */
export const Drafts = memo(Icon)
