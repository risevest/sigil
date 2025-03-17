import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 18H9V16H3V18ZM3 6V8H21V6H3ZM3 13H15V11H3V13Z" />
    </Svg>
  )
}

Icon.displayName = 'Sort'

/**
 * Material Icon: Sort
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sort Material Icon Docs}
 */
export const Sort = memo(Icon)
