import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill={color} fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 4a7 7 0 0 0-1.914 13.735c.524.15.914.63.914 1.207v1.808c0 .69-.56 1.25-1.25 1.25H6a1 1 0 1 1 0-2h3v-.512a9 9 0 1 1 6 0V20h3a1 1 0 1 1 0 2h-3.75c-.69 0-1.25-.56-1.25-1.25v-1.808c0-.577.39-1.058.914-1.207A7 7 0 0 0 12 4"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'OmegaLine'

/**
 * MingCute Icon: Omega Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const OmegaLine = memo(Icon)
