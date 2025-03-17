import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 14.5L12 9.5L17 14.5H7Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropUp'

/**
 * Material Icon: Arrow Drop Up
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_drop_up Material Icon Docs}
 */
export const ArrowDropUp = memo(Icon)
