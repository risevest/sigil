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
          d="M16.434 3a2 2 0 0 1 1.626.836l.089.135 2.424 4.04a3 3 0 0 1 .418 1.31l.009.233V19a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V9.554a3 3 0 0 1 .316-1.34l.112-.204L5.85 3.971a2 2 0 0 1 1.554-.965L7.566 3zM19 10H5v9h14zm-8-5H7.566l-1.8 3H11zm5.434 0H13v3h5.234z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BoxLine'

/**
 * MingCute Icon: Box Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BoxLine = memo(Icon)
