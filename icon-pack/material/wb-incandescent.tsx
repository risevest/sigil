import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.55 18.5654L4.96 19.9754L6.75 18.1754L5.34 16.7654L3.55 18.5654ZM11 19.4754H13V22.4754H11V19.4754ZM1 10.4754H4V12.4754H1V10.4754ZM13 3.52539V7.48539L14 8.06539C15.24 8.78539 16 10.1054 16 11.5254C16 13.7354 14.21 15.5254 12 15.5254C9.79 15.5254 8 13.7354 8 11.5254C8 10.1054 8.77 8.78539 10 8.06539L11 7.48539V3.52539H13ZM15 1.52539H9V6.33539C7.21 7.37539 6 9.30539 6 11.5254C6 14.8354 8.69 17.5254 12 17.5254C15.31 17.5254 18 14.8354 18 11.5254C18 9.30539 16.79 7.37539 15 6.33539V1.52539ZM20 10.4754H23V12.4754H20V10.4754ZM17.24 18.1854L19.03 19.9854L20.44 18.5754L18.64 16.7854L17.24 18.1854Z" />
    </Svg>
  )
}

Icon.displayName = 'WbIncandescent'

/**
 * Material Icon: Wb Incandescent
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wb_incandescent Material Icon Docs}
 */
export const WbIncandescent = memo(Icon)
