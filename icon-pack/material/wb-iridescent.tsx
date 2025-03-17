import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.99498 15H18.995V9H4.99498V15ZM6.99498 11H16.995V13H6.99498V11ZM10.995 1H12.995V4H10.995V1ZM20.455 5.01L19.035 3.6L17.245 5.39L18.655 6.8L20.455 5.01ZM10.995 20H12.995V23H10.995V20ZM17.235 18.71L19.025 20.51L20.445 19.09L18.645 17.3L17.235 18.71ZM4.95498 3.595L6.74298 5.385L5.33498 6.79L3.54798 5.003L4.95498 3.595ZM3.54498 19.08L4.95498 20.5L6.74498 18.7L5.33498 17.29L3.54498 19.08Z" />
    </Svg>
  )
}

Icon.displayName = 'WbIridescent'

/**
 * Material Icon: Wb Iridescent
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wb_iridescent Material Icon Docs}
 */
export const WbIridescent = memo(Icon)
