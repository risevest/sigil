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
          d="M2 6a1 1 0 0 1 1-1h.5a1 1 0 0 1 .868.504L7 10.109V6a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1h-.5a1 1 0 0 1-.868-.504L4 8.891V13a1 1 0 1 1-2 0zm12.947 1.106a1 1 0 0 1 .447 1.341l-4 8a1 1 0 1 1-1.788-.894l4-8a1 1 0 0 1 1.341-.447m1.607 3.57A1 1 0 0 1 17.5 10h1a1 1 0 0 1 .946.676l1.707 4.979.778 1.98a1 1 0 0 1-1.862.73L19.533 17h-3.066l-.536 1.366a1 1 0 0 1-1.862-.732l.778-1.98zM17.186 15h1.628L18 12.625z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'NaLine'

/**
 * MingCute Icon: Na Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const NaLine = memo(Icon)
