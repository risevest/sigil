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
          d="M2.5 6.5a4 4 0 1 1 8 0v1h3v-1a4 4 0 1 1 4 4h-1v3h1a4 4 0 1 1-4 4v-1h-3v1a4 4 0 1 1-4-4h1v-3h-1a4 4 0 0 1-4-4m5 1v-1a1 1 0 1 0-1 1zm3 3v3h3v-3zm-3 6h-1a1 1 0 1 0 1 1zm9 0v1a1 1 0 1 0 1-1zm0-9h1a1 1 0 1 0-1-1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CommandFill'

/**
 * MingCute Icon: Command Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CommandFill = memo(Icon)
