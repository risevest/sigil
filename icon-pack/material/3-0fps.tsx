import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 5V8H8V10.5H3V13.5H8V16H2V19H8C9.66 19 11 17.66 11 16V14.1C11 12.94 10.06 12 8.9 12C10.06 12 11 11.06 11 9.9V8C11 6.34 9.66 5 8 5H2ZM19 8V16H15V8H19ZM19 5H15C13.34 5 12 6.34 12 8V16C12 17.66 13.34 19 15 19H19C20.66 19 22 17.66 22 16V8C22 6.34 20.66 5 19 5Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi30fps'

/**
 * Material Icon: 3 0fps
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:3_0fps Material Icon Docs}
 */
export const Mi30fps = memo(Icon)
