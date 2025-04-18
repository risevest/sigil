import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.585 7.08516L11.035 2.53516V5.60516C7.09497 6.09516 4.03497 9.45516 4.03497 13.5352C4.03497 17.6152 7.08497 20.9752 11.035 21.4652V19.4452C8.19497 18.9652 6.03497 16.5052 6.03497 13.5352C6.03497 10.5652 8.19497 8.10516 11.035 7.62516V11.5352L15.585 7.08516ZM19.965 12.5352C19.795 11.1452 19.245 9.80516 18.345 8.64516L16.925 10.0652C17.465 10.8152 17.805 11.6652 17.945 12.5352H19.965ZM13.035 19.4352V21.4552C14.425 21.2852 15.775 20.7452 16.935 19.8452L15.495 18.4052C14.745 18.9452 13.905 19.2952 13.035 19.4352ZM16.925 17.0152L18.345 18.4252C19.245 17.2652 19.795 15.9252 19.965 14.5352H17.945C17.805 15.4052 17.465 16.2552 16.925 17.0152Z" />
    </Svg>
  )
}

Icon.displayName = 'RotateRight'

/**
 * Material Icon: Rotate Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rotate_right Material Icon Docs}
 */
export const RotateRight = memo(Icon)
