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
          d="M9.5 4a1 1 0 0 0-2 0c0 1.827-.456 3.675-1.394 5.553-.452.902-1.088 1.6-1.79 2.569C3.666 13.018 3 14.112 3 15.5A3.5 3.5 0 0 0 6.5 19c.572 0 1.512-.376 2.053-.106.398.2.656.66.957.98.52.55 1.264 1.126 2.49 1.126 1.226 0 1.97-.576 2.49-1.126.295-.313.562-.782.957-.98.54-.27 1.48.106 2.053.106a3.5 3.5 0 0 0 3.5-3.5c0-1.387-.665-2.482-1.316-3.378-.702-.968-1.338-1.667-1.79-2.57C16.956 7.676 16.5 5.828 16.5 4a1 1 0 1 0-2 0c0 2.173.544 4.325 1.606 6.447.548 1.098 1.412 2.095 1.96 2.85.6.825.934 1.48.934 2.203a1.5 1.5 0 0 1-1.5 1.5c-1.016 0-1.967-.385-2.947.106-.642.32-1.04.888-1.518 1.395-.306.325-.56.499-1.035.499-.474 0-.73-.174-1.035-.498-.475-.505-.88-1.078-1.518-1.396-.98-.49-1.93-.106-2.947-.106A1.5 1.5 0 0 1 5 15.5c0-.722.335-1.378.934-2.204.548-.755 1.412-1.751 1.96-2.849C8.956 8.325 9.5 6.173 9.5 4"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'NoseLine'

/**
 * MingCute Icon: Nose Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const NoseLine = memo(Icon)
