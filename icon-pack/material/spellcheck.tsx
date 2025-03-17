import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.72 15.25H13.81L8.69998 2.25H6.83998L1.72998 15.25H3.81998L4.93998 12.25H10.58L11.72 15.25ZM5.69998 10.25L7.76998 4.73L9.83998 10.25H5.69998ZM20.86 10.84L12.77 18.93L9.09998 15.25L7.68998 16.66L12.78 21.75L22.27 12.25L20.86 10.84Z" />
    </Svg>
  )
}

Icon.displayName = 'Spellcheck'

/**
 * Material Icon: Spellcheck
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:spellcheck Material Icon Docs}
 */
export const Spellcheck = memo(Icon)
