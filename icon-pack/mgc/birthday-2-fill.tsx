import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12.6 2.2a1 1 0 0 0-1.2 0 7.925 7.925 0 0 0-1.147 1.073C9.73 3.862 9 4.855 9 6a3 3 0 0 0 3 3H6a3 3 0 0 0-3 3v2c0 1.236 1.411 1.942 2.4 1.2l.667-.5a1 1 0 0 1 1.2 0l.266.2a3 3 0 0 0 3.6 0l.267-.2a1 1 0 0 1 1.2 0l.267.2a3 3 0 0 0 3.6 0l.266-.2a1 1 0 0 1 1.2 0l.667.5c.989.742 2.4.036 2.4-1.2v-2a3 3 0 0 0-3-3h-6a3 3 0 0 0 3-3c0-1.145-.73-2.138-1.253-2.727-.346-.39-.73-.76-1.147-1.073M4 17.415V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.585a1.477 1.477 0 0 1-1.4-.215l-.667-.5a1 1 0 0 0-1.2 0l-.266.2a3 3 0 0 1-3.6 0l-.267-.2a1 1 0 0 0-1.2 0l-.267.2a3 3 0 0 1-3.6 0l-.266-.2a1 1 0 0 0-1.2 0l-.667.5a1.477 1.477 0 0 1-1.4.215"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Birthday2Fill'

/**
 * MingCute Icon: Birthday 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Birthday2Fill = memo(Icon)
