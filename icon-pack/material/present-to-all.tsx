import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M21 3H3C1.89 3 1 3.89 1 5V19C1 20.11 1.89 21 3 21H21C22.11 21 23 20.11 23 19V5C23 3.89 22.11 3 21 3ZM21 19.02H3V4.98H21V19.02ZM10 12H8L12 8L16 12H14V16H10V12Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'PresentToAll'

/**
 * Material Icon: Present To All
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:present_to_all Material Icon Docs}
 */
export const PresentToAll = memo(Icon)
