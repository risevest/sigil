import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.5 18H9.5V16H3.5V18ZM19.5 4H3.5V6H19.5V4ZM16.5 10H3.5V12H16.75C17.85 12 18.75 12.9 18.75 14C18.75 15.1 17.85 16 16.75 16H14.5V14L11.5 17L14.5 20V18H16.5C18.71 18 20.5 16.21 20.5 14C20.5 11.79 18.71 10 16.5 10Z" />
    </Svg>
  )
}

Icon.displayName = 'WrapText'

/**
 * Material Icon: Wrap Text
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wrap_text Material Icon Docs}
 */
export const WrapText = memo(Icon)
