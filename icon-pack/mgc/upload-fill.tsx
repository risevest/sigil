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
          d="M11 9v6a1 1 0 0 0 1.993.117L13 15V9h6a2 2 0 0 1 1.995 1.85L21 11v9a2 2 0 0 1-1.85 1.995L19 22H5a2 2 0 0 1-1.995-1.85L3 20v-9a2 2 0 0 1 1.85-1.995L5 9zm1.884-6.531 3.359 3.358a1 1 0 1 1-1.415 1.415L13 5.413V9h-2V5.413L9.172 7.242a1 1 0 1 1-1.415-1.415l3.36-3.358a1.25 1.25 0 0 1 1.767 0"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'UploadFill'

/**
 * MingCute Icon: Upload Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const UploadFill = memo(Icon)
