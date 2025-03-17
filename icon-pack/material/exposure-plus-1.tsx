import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 7.5H8V11.5H4V13.5H8V17.5H10V13.5H14V11.5H10V7.5ZM20 18.5H18V7.88L15 8.9V7.2L19.7 5.5H20V18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ExposurePlus1'

/**
 * Material Icon: Exposure Plus 1
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:exposure_plus_1 Material Icon Docs}
 */
export const ExposurePlus1 = memo(Icon)
