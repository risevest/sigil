import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 7V3H2V21H22V7H12ZM10 19H4V17H10V19ZM10 15H4V13H10V15ZM10 11H4V9H10V11ZM10 7H4V5H10V7ZM20 19H12V9H20V19ZM18 11H14V13H18V11ZM18 15H14V17H18V15Z" />
    </Svg>
  )
}

Icon.displayName = 'CorporateFare'

/**
 * Material Icon: Corporate Fare
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:corporate_fare Material Icon Docs}
 */
export const CorporateFare = memo(Icon)
