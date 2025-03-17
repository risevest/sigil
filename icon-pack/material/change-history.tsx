import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 7.77L18.39 18H5.61L12 7.77ZM12 4L2 20H22L12 4Z" />
    </Svg>
  )
}

Icon.displayName = 'ChangeHistory'

/**
 * Material Icon: Change History
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:change_history Material Icon Docs}
 */
export const ChangeHistory = memo(Icon)
