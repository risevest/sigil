import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 11H9V7H7V17H9V13H15V17H17V7H15V11Z" />
    </Svg>
  )
}

Icon.displayName = 'HMobiledata'

/**
 * Material Icon: H Mobiledata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:h_mobiledata Material Icon Docs}
 */
export const HMobiledata = memo(Icon)
