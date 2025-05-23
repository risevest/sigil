import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 4V20H6V8.83L10.83 4H18ZM7 17H9V19H7V17ZM15 17H17V19H15V17ZM7 11H9V15H7V11ZM11 15H13V19H11V15ZM11 11H13V13H11V11ZM15 11H17V15H15V11Z" />
    </Svg>
  )
}

Icon.displayName = 'SimCard'

/**
 * Material Icon: Sim Card
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sim_card Material Icon Docs}
 */
export const SimCard = memo(Icon)
