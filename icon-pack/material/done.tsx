import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.79995 15.8998L4.59995 11.6998L3.19995 13.0998L8.79995 18.6998L20.8 6.6998L19.4 5.2998L8.79995 15.8998Z" />
    </Svg>
  )
}

Icon.displayName = 'Done'

/**
 * Material Icon: Done
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:done Material Icon Docs}
 */
export const Done = memo(Icon)
