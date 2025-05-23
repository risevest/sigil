import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 18.5062V17.5062C18 16.7062 17.3 16.0062 16.5 16.0062H13V22.0062H14.5V20.0062H15.6L16.5 22.0062H18L17.1 19.9062C17.6 19.6062 18 19.1062 18 18.5062ZM16.5 18.5062H14.5V17.5062H16.5V18.5062ZM3.5 18.0062H1.5V16.0062H0V22.0062H1.5V19.5062H3.5V22.0062H5V16.0062H3.5V18.0062ZM10 16.0062H6.5V22.0062H10C10.8 22.0062 11.5 21.3062 11.5 20.5062V17.5062C11.5 16.7062 10.8 16.0062 10 16.0062ZM10 20.5062H8V17.5062H10V20.5062ZM24 20.0062H22V22.0062H20.5V20.0062H18.5V18.5062H20.5V16.5062H22V18.5062H24V20.0062ZM10.98 4.15624L9.42 2.59624C14.52 0.176235 19.83 5.48624 17.41 10.5862L15.85 9.02624C16.66 6.06624 13.94 3.34624 10.98 4.15624ZM6.34 2.34624L4.93 3.76624L6.59 5.42624C4.17 10.5262 9.48 15.8362 14.58 13.4162L16.24 15.0762L17.65 13.6662L6.34 2.34624ZM8.15 6.98624L13.02 11.8562C10.06 12.6662 7.34 9.94624 8.15 6.98624Z" />
    </Svg>
  )
}

Icon.displayName = 'HdrOffSelect'

/**
 * Material Icon: Hdr Off Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hdr_off_select Material Icon Docs}
 */
export const HdrOffSelect = memo(Icon)
