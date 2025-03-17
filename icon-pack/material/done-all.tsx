import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.965 6.70492L16.555 5.29492L10.215 11.6349L11.625 13.0449L17.965 6.70492ZM22.205 5.29492L11.625 15.8749L7.445 11.7049L6.035 13.1149L11.625 18.7049L23.625 6.70492L22.205 5.29492ZM0.375 13.1149L5.965 18.7049L7.375 17.2949L1.795 11.7049L0.375 13.1149Z" />
    </Svg>
  )
}

Icon.displayName = 'DoneAll'

/**
 * Material Icon: Done All
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:done_all Material Icon Docs}
 */
export const DoneAll = memo(Icon)
