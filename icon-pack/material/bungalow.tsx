import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 14H11V12H13V14ZM18.1 16.56L17 14.79V21H6.99995V14.8L5.89995 16.56L4.19995 15.5L12 3L19.8 15.5L18.1 16.56ZM15 11.59L12 6.79L8.99995 11.59V19H11V16H13V19H15V11.59Z" />
    </Svg>
  )
}

Icon.displayName = 'Bungalow'

/**
 * Material Icon: Bungalow
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bungalow Material Icon Docs}
 */
export const Bungalow = memo(Icon)
