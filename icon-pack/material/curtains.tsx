import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 19V3H4V19H2V21H22V19H20ZM18 10.86C15.95 10.28 14.36 7.93 14.06 5H18V10.86ZM15.81 12C13.77 13.35 12.31 15.94 12.05 19H11.96C11.7 15.94 10.24 13.35 8.2 12C10.24 10.65 11.7 8.06 11.96 5H12.05C12.31 8.06 13.77 10.65 15.81 12ZM9.94 5C9.64 7.93 8.05 10.27 6 10.86V5H9.94ZM6 13.14C8.05 13.72 9.64 16.07 9.94 19H6V13.14ZM14.06 19C14.36 16.07 15.95 13.73 18 13.14V19H14.06Z" />
    </Svg>
  )
}

Icon.displayName = 'Curtains'

/**
 * Material Icon: Curtains
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:curtains Material Icon Docs}
 */
export const Curtains = memo(Icon)
