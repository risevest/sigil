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
          d="M9.52 3a2 2 0 0 1 1.561.75l1.4 1.75H20a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H4v14h16V7.5h-7.52a2 2 0 0 1-1.561-.75zm2.47 8c.558 0 1.01.452 1.01 1.01v1.124A1 1 0 0 1 12.5 17h-.49A1.01 1.01 0 0 1 11 15.99V15a1 1 0 1 1 0-2zm.01-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FolderInfoLine'

/**
 * MingCute Icon: Folder Info Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FolderInfoLine = memo(Icon)
