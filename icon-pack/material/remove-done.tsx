import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.67504 2.09961L3.26504 3.50961L13.645 13.8896L12.235 15.2996L7.99504 11.0596L6.58504 12.4696L12.245 18.1296L15.075 15.2996L21.675 21.8996L23.085 20.4896L4.67504 2.09961ZM17.885 12.4796L22.835 7.51961L21.405 6.11961L16.465 11.0596L17.885 12.4796ZM17.175 7.51961L15.765 6.10961L13.645 8.22961L15.055 9.63961L17.175 7.51961ZM0.915039 12.4696L6.57504 18.1296L7.98504 16.7196L2.32504 11.0596L0.915039 12.4696Z" />
    </Svg>
  )
}

Icon.displayName = 'RemoveDone'

/**
 * Material Icon: Remove Done
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:remove_done Material Icon Docs}
 */
export const RemoveDone = memo(Icon)
