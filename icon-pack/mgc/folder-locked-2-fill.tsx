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
          d="M18.5 13a2.5 2.5 0 0 1 2.495 2.336L21 15.5v.5a1 1 0 0 1 .993.883L22 17v4a1 1 0 0 1-.883.993L21 22h-5a1 1 0 0 1-.993-.883L15 21v-4a1 1 0 0 1 .883-.993L16 16v-.5a2.5 2.5 0 0 1 2.5-2.5M9.52 3a2 2 0 0 1 1.561.75l1.4 1.75H20a2 2 0 0 1 2 2v5.171a4.501 4.501 0 0 0-7.93 2.031A2.994 2.994 0 0 0 13 17v4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm8.98 12a.5.5 0 0 0-.5.5v.5h1v-.5a.5.5 0 0 0-.5-.5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FolderLocked2Fill'

/**
 * MingCute Icon: Folder Locked 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FolderLocked2Fill = memo(Icon)
