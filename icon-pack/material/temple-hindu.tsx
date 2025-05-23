import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 11.5V13.5H18L15 3.5V1.5H13V3.5H10.97V1.5H8.97V3.62L6 13.5H4V11.5H2V22.5H11V17.5H13V22.5H22V11.5H20ZM15.31 11.5H8.69L9.29 9.5H14.71L15.31 11.5ZM14.11 7.5H9.89L10.49 5.5H13.51L14.11 7.5ZM20 20.5H15V15.5H9V20.5H4V15.5H7.49L8.09 13.5H15.91L16.51 15.5H20V20.5Z" />
    </Svg>
  )
}

Icon.displayName = 'TempleHindu'

/**
 * Material Icon: Temple Hindu
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:temple_hindu Material Icon Docs}
 */
export const TempleHindu = memo(Icon)
