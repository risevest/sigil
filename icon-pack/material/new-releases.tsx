import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M23 11.9952L20.56 9.21516L20.9 5.53516L17.29 4.71516L15.4 1.53516L12 2.99516L8.6 1.53516L6.71 4.71516L3.1 5.52516L3.44 9.20516L1 11.9952L3.44 14.7752L3.1 18.4652L6.71 19.2852L8.6 22.4652L12 20.9952L15.4 22.4552L17.29 19.2752L20.9 18.4552L20.56 14.7752L23 11.9952ZM18.49 14.1052L18.75 16.8952L16.01 17.5152L14.58 19.9252L12 18.8152L9.42 19.9252L7.99 17.5152L5.25 16.8952L5.51 14.0952L3.66 11.9952L5.51 9.87516L5.25 7.09516L7.99 6.48516L9.42 4.07516L12 5.17516L14.58 4.06516L16.01 6.47516L18.75 7.09516L18.49 9.88516L20.34 11.9952L18.49 14.1052ZM11 14.9952H13V16.9952H11V14.9952ZM11 6.99516H13V12.9952H11V6.99516Z" />
    </Svg>
  )
}

Icon.displayName = 'NewReleases'

/**
 * Material Icon: New Releases
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:new_releases Material Icon Docs}
 */
export const NewReleases = memo(Icon)
