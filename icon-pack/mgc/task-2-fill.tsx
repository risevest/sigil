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
          d="M7.416 3A4.983 4.983 0 0 0 7 5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2c0-.711-.148-1.388-.416-2H18a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM12 14H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m3-4H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2m-3-8a2.99 2.99 0 0 1 2.236 1c.428.478.704 1.093.755 1.772L15 5H9c0-.725.257-1.39.685-1.908L9.764 3c.55-.614 1.348-1 2.236-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Task2Fill'

/**
 * MingCute Icon: Task 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Task2Fill = memo(Icon)
