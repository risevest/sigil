import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 15C7.1 15 8 15.9 8 17C8 18.1 7.1 19 6 19C4.9 19 4 18.1 4 17C4 15.9 4.9 15 6 15ZM6 13C3.8 13 2 14.8 2 17C2 19.2 3.8 21 6 21C8.2 21 10 19.2 10 17C10 14.8 8.2 13 6 13ZM12 5C13.1 5 14 5.9 14 7C14 8.1 13.1 9 12 9C10.9 9 10 8.1 10 7C10 5.9 10.9 5 12 5ZM12 3C9.8 3 8 4.8 8 7C8 9.2 9.8 11 12 11C14.2 11 16 9.2 16 7C16 4.8 14.2 3 12 3ZM18 15C19.1 15 20 15.9 20 17C20 18.1 19.1 19 18 19C16.9 19 16 18.1 16 17C16 15.9 16.9 15 18 15ZM18 13C15.8 13 14 14.8 14 17C14 19.2 15.8 21 18 21C20.2 21 22 19.2 22 17C22 14.8 20.2 13 18 13Z" />
    </Svg>
  )
}

Icon.displayName = 'Workspaces'

/**
 * Material Icon: Workspaces
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:workspaces Material Icon Docs}
 */
export const Workspaces = memo(Icon)
