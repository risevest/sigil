import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 4c-.672 0-1.235.44-1.599.805-.414.415-.813.978-1.16 1.63-.448.845-.836 1.89-1.054 3.058a9.42 9.42 0 0 0-1.898-.74c-.493-.129-.973-.2-1.399-.19-.37.009-.934.082-1.34.487-.421.422-.513 1.047-.483 1.618.028.528.163 1.137.385 1.769.242.69.603 1.445 1.088 2.197a7.31 7.31 0 0 0-1.23.6C2.69 15.62 2 16.204 2 17c0 1.087 1.193 1.766 2.046 2.158C5.074 19.631 6.466 20 8 20c1.55 0 2.96-.376 4-.863 1.04.487 2.45.863 4 .863 1.534 0 2.926-.369 3.954-.842C20.807 18.766 22 18.087 22 17c0-.797-.69-1.38-1.31-1.765a7.31 7.31 0 0 0-1.23-.601c.485-.752.846-1.508 1.088-2.197.222-.631.357-1.241.385-1.77.03-.57-.062-1.195-.483-1.617-.406-.405-.97-.478-1.34-.487-.426-.01-.906.061-1.399.19a9.422 9.422 0 0 0-1.898.74 10.808 10.808 0 0 0-1.055-3.058c-.346-.652-.745-1.215-1.16-1.63C13.235 4.44 12.673 4 12 4"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'LotusFill'

/**
 * MingCute Icon: Lotus Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LotusFill = memo(Icon)
