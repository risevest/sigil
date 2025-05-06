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
          d="M3 4a1 1 0 0 1 1-1h1c.768 0 1.47.289 2 .764A2.989 2.989 0 0 1 9 3c.768 0 1.47.289 2 .764A3 3 0 0 1 16 6v10a2 2 0 0 0 2 2h.586l-.793-.793a1 1 0 0 1 1.414-1.414l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414l.793-.793H18a4 4 0 0 1-4-4V6a1 1 0 1 0-2 0v9a1 1 0 1 1-2 0V6a1 1 0 0 0-2 0v9a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ScorpioLine'

/**
 * MingCute Icon: Scorpio Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ScorpioLine = memo(Icon)
