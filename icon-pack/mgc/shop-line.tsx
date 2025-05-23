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
          d="M17.52 4a2 2 0 0 1 1.442.614l.12.137 3.05 3.812c.757.947.134 2.334-1.04 2.432L20.96 11H20v8a1 1 0 0 1-1.993.117L18 19v-8h-2v7a2 2 0 0 1-1.85 1.995L14 20H6a2 2 0 0 1-1.994-1.85L4 18v-7h-.96c-1.212 0-1.906-1.353-1.25-2.33l.08-.107 3.049-3.812a2 2 0 0 1 1.38-.743L6.482 4zM7 11H6v7h8v-7h-1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm4 0H9v3h2zm6.52-5H6.48l-2.4 3h15.84z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ShopLine'

/**
 * MingCute Icon: Shop Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ShopLine = memo(Icon)
