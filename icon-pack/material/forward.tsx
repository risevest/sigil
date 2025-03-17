import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 8.83L17.17 12L14 15.17V14H6V10H14V8.83ZM12 4V8H4V16H12V20L20 12L12 4Z" />
    </Svg>
  )
}

Icon.displayName = 'Forward'

/**
 * Material Icon: Forward
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:forward Material Icon Docs}
 */
export const Forward = memo(Icon)
