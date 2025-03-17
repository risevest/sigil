import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M9.03 3L7.92 10.07H10.54L11.24 5.57H13.82L11.8 18.43H9.47L9.06 21H16.33L16.73 18.43H14.38L16.38 5.57H18.96L18.25 10.07H20.9L22 3H9.03ZM8 5H4L3.69 7H7.69L8 5ZM7.39 9H3.39L3.08 11H7.08L7.39 9ZM8.31 17H2.31L2 19H8L8.31 17ZM8.93 13H2.93L2.62 15H8.63L8.93 13Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'Rtt'

/**
 * Material Icon: Rtt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rtt Material Icon Docs}
 */
export const Rtt = memo(Icon)
