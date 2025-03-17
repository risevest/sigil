import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.07497 10.0652L5.66497 8.64516C4.76497 9.80516 4.20497 11.1452 4.03497 12.5352H6.05497C6.19497 11.6652 6.54497 10.8152 7.07497 10.0652ZM6.05497 14.5352H4.03497C4.20497 15.9252 4.75497 17.2652 5.65497 18.4252L7.06497 17.0052C6.54497 16.2552 6.19497 15.4152 6.05497 14.5352ZM7.06497 19.8552C8.22497 20.7552 9.57497 21.2952 10.965 21.4652V19.4352C10.095 19.2852 9.25497 18.9452 8.50497 18.4052L7.06497 19.8552ZM12.965 5.60516V2.53516L8.41497 7.08516L12.965 11.5352V7.62516C15.805 8.10516 17.965 10.5652 17.965 13.5352C17.965 16.5052 15.805 18.9652 12.965 19.4452V21.4652C16.915 20.9752 19.965 17.6152 19.965 13.5352C19.965 9.45516 16.915 6.09516 12.965 5.60516Z" />
    </Svg>
  )
}

Icon.displayName = 'RotateLeft'

/**
 * Material Icon: Rotate Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rotate_left Material Icon Docs}
 */
export const RotateLeft = memo(Icon)
