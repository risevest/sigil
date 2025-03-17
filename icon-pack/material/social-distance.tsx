import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 5.00488C4 3.90488 4.9 3.00488 6 3.00488C7.1 3.00488 8 3.90488 8 5.00488C8 6.10488 7.1 7.00488 6 7.00488C4.9 7.00488 4 6.10488 4 5.00488ZM8.78 8.58488C7.93 8.21488 6.99 8.00488 6 8.00488C5.01 8.00488 4.07 8.21488 3.22 8.58488C2.48 8.90488 2 9.62488 2 10.4349V11.0049H10V10.4349C10 9.62488 9.52 8.90488 8.78 8.58488ZM18 7.00488C19.1 7.00488 20 6.10488 20 5.00488C20 3.90488 19.1 3.00488 18 3.00488C16.9 3.00488 16 3.90488 16 5.00488C16 6.10488 16.9 7.00488 18 7.00488ZM20.78 8.58488C19.93 8.21488 18.99 8.00488 18 8.00488C17.01 8.00488 16.07 8.21488 15.22 8.58488C14.48 8.90488 14 9.62488 14 10.4349V11.0049H22V10.4349C22 9.62488 21.52 8.90488 20.78 8.58488ZM18.01 13.0149L16.6 14.4249L18.17 16.0049H5.83L7.41 14.4149L6 13.0049L2 17.0049L5.99 20.9949L7.4 19.5849L5.83 18.0049H18.17L16.59 19.5849L18 20.9949L22 17.0049L18.01 13.0149Z" />
    </Svg>
  )
}

Icon.displayName = 'SocialDistance'

/**
 * Material Icon: Social Distance
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:social_distance Material Icon Docs}
 */
export const SocialDistance = memo(Icon)
