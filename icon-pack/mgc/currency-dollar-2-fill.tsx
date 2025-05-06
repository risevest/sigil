import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M13.5 4a1.5 1.5 0 0 0-3 0v.5h-1a4.5 4.5 0 0 0 0 9h5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 0 0 3h3.5v.5a1.5 1.5 0 0 0 3 0v-.5h1a4.5 4.5 0 1 0 0-9h-5a1.5 1.5 0 1 1 0-3H17a1.5 1.5 0 0 0 0-3h-3.5z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CurrencyDollar2Fill'

/**
 * MingCute Icon: Currency Dollar 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyDollar2Fill = memo(Icon)
