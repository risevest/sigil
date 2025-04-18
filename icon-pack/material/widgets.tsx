import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 5.17473L18.83 8.00473L16 10.8347L13.17 8.00473L16 5.17473ZM8.34 5.65473V9.65473H4.34V5.65473H8.34ZM18.34 15.6547V19.6547H14.34V15.6547H18.34ZM8.34 15.6547V19.6547H4.34V15.6547H8.34ZM16 2.34473L10.34 7.99473L16 13.6547L21.66 7.99473L16 2.34473ZM10.34 3.65473H2.34V11.6547H10.34V3.65473ZM20.34 13.6547H12.34V21.6547H20.34V13.6547ZM10.34 13.6547H2.34V21.6547H10.34V13.6547Z" />
    </Svg>
  )
}

Icon.displayName = 'Widgets'

/**
 * Material Icon: Widgets
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:widgets Material Icon Docs}
 */
export const Widgets = memo(Icon)
