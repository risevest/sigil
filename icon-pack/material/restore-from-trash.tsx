import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 14V9H16V19H8V14ZM10 18H14V14H16L12 10L8 14H10V18Z" />
    </Svg>
  )
}

Icon.displayName = 'RestoreFromTrash'

/**
 * Material Icon: Restore From Trash
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:restore_from_trash Material Icon Docs}
 */
export const RestoreFromTrash = memo(Icon)
