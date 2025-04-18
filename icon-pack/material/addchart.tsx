import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.5 5.5V7.5H18.5V10.5H16.5V7.5H13.5V5.5H16.5V2.5H18.5V5.5H21.5ZM18.5 19.5H4.5V5.5H10.5V3.5H4.5C3.4 3.5 2.5 4.4 2.5 5.5V19.5C2.5 20.6 3.4 21.5 4.5 21.5H18.5C19.6 21.5 20.5 20.6 20.5 19.5V13.5H18.5V19.5ZM14.5 13.5V17.5H16.5V13.5H14.5ZM10.5 17.5H12.5V9.5H10.5V17.5ZM8.5 17.5V11.5H6.5V17.5H8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Addchart'

/**
 * Material Icon: Addchart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:addchart Material Icon Docs}
 */
export const Addchart = memo(Icon)
