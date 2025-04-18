import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 11V8C10 7.45 9.55 7 9 7C8.45 7 8 7.45 8 8V11C8 11.55 8.45 12 9 12C9.55 12 10 11.55 10 11ZM16 11V8C16 7.45 15.55 7 15 7C14.45 7 14 7.45 14 8V11C14 11.55 14.45 12 15 12C15.55 12 16 11.55 16 11ZM14 16C14 14.9 13.1 14 12 14C10.9 14 10 14.9 10 16V18H14V16Z" />
    </Svg>
  )
}

Icon.displayName = 'Outlet'

/**
 * Material Icon: Outlet
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:outlet Material Icon Docs}
 */
export const Outlet = memo(Icon)
