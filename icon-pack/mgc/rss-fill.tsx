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
          d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zM8.5 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8 10.5a1 1 0 1 0 0 2 3.5 3.5 0 0 1 3.5 3.5 1 1 0 1 0 2 0A5.5 5.5 0 0 0 8 10.5M8.5 7c-.19 0-.379.006-.566.019a1 1 0 0 0 .132 1.995 6.5 6.5 0 0 1 6.92 6.92 1 1 0 1 0 1.995.132A8.5 8.5 0 0 0 8.5 7"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'RssFill'

/**
 * MingCute Icon: Rss Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RssFill = memo(Icon)
