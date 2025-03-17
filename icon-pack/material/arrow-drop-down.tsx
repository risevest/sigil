import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 9.5L12 14.5L17 9.5H7Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropDown'

/**
 * Material Icon: Arrow Drop Down
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_drop_down Material Icon Docs}
 */
export const ArrowDropDown = memo(Icon)
