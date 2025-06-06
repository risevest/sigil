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
          d="M13 4a1 1 0 1 0-2 0v1H9.5a4 4 0 1 0 0 8h5a2 2 0 1 1 0 4H7a1 1 0 1 0 0 2h4v1a1 1 0 1 0 2 0v-1h1.5a4 4 0 0 0 0-8h-5a2 2 0 1 1 0-4H17a1 1 0 1 0 0-2h-4z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CurrencyDollar2Line'

/**
 * MingCute Icon: Currency Dollar 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyDollar2Line = memo(Icon)
