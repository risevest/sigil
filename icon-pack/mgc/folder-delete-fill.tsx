import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.5a2 2 0 0 0-2-2h-7.52l-1.399-1.75A2 2 0 0 0 9.52 3zm5.172 7.172a1 1 0 0 1 1.414 0L12 11.586l1.414-1.414a1 1 0 1 1 1.414 1.414L13.414 13l1.414 1.414a1 1 0 0 1-1.414 1.414L12 14.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L10.586 13l-1.414-1.414a1 1 0 0 1 0-1.414"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FolderDeleteFill'

/**
 * MingCute Icon: Folder Delete Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FolderDeleteFill = memo(Icon)
