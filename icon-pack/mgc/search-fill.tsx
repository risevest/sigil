import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill={color}>
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M10.5 2a8.5 8.5 0 0 1 6.676 13.762l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 1 1 10.5 2m0 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m0 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SearchFill'

/**
 * MingCute Icon: Search Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SearchFill = memo(Icon)
