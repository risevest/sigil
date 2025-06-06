import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M17.684 14.051a1 1 0 0 1 .507-.033l.125.033 3 1a1 1 0 0 1 .677.833L22 16v1.671a4.346 4.346 0 0 1-3.866 4.32 1.2 1.2 0 0 1-.268 0 4.347 4.347 0 0 1-3.86-4.106L14 17.67V16a1 1 0 0 1 .576-.906l.108-.043zM9.519 3a2 2 0 0 1 1.443.614l.12.137L12.48 5.5H20a2 2 0 0 1 1.995 1.85L22 7.5V13h-2V7.5h-7.52a2 2 0 0 1-1.442-.614l-.12-.137L9.52 5H4v14h8v2H4a2 2 0 0 1-1.995-1.85L2 19V5a2 2 0 0 1 1.85-1.995L4 3zM18 16.054l-2 .667v.95c0 1.167.855 2.15 2 2.321a2.347 2.347 0 0 0 1.994-2.155L20 17.67v-.95z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FolderSecurityLine'

/**
 * MingCute Icon: Folder Security Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FolderSecurityLine = memo(Icon)
