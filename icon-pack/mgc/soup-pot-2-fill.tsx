import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10 3a1 1 0 0 0 0 2h1v1h-1c-.238 0-.476.025-.713.055-.415.053-.99.158-1.65.366A9.481 9.481 0 0 0 4.506 8.1 1.999 1.999 0 0 0 4.413 8l-.707-.707a1 1 0 0 0-1.414 1.414L3 9.414V16a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V9.414l.707-.707a1 1 0 0 0-1.414-1.414L19.586 8a2.01 2.01 0 0 0-.092.099 9.48 9.48 0 0 0-3.13-1.678 9.535 9.535 0 0 0-1.651-.366A7.737 7.737 0 0 0 14 6h-1V5h1a1 1 0 1 0 0-2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SoupPot2Fill'

/**
 * MingCute Icon: Soup Pot 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SoupPot2Fill = memo(Icon)
