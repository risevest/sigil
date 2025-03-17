import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 3H3V6C4.66 6 6 4.66 6 3ZM14 3H12C12 7.97 7.97 12 3 12V14C9.08 14 14 9.07 14 3ZM10 3H8C8 5.76 5.76 8 3 8V10C6.87 10 10 6.87 10 3ZM10 21H12C12 16.03 16.03 12 21 12V10C14.93 10 10 14.93 10 21ZM18 21H21V18C19.34 18 18 19.34 18 21ZM14 21H16C16 18.24 18.24 16 21 16V14C17.13 14 14 17.13 14 21Z" />
    </Svg>
  )
}

Icon.displayName = 'LeakAdd'

/**
 * Material Icon: Leak Add
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:leak_add Material Icon Docs}
 */
export const LeakAdd = memo(Icon)
