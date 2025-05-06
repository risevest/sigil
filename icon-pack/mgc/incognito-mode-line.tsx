import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill="none" fill-rule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M17 13a4 4 0 1 1-4 4h-2a4 4 0 1 1-.535-2h3.07A3.998 3.998 0 0 1 17 13M7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4m10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M15.306 3a3 3 0 0 1 2.924 2.328l.035.179.721 4.329.01.082L19 10h1a1 1 0 0 1 .117 1.993L20 12H4a1 1 0 0 1-.117-1.993L4 10h1l.003-.082.01-.082.722-4.33a3 3 0 0 1 2.777-2.5L8.694 3zm0 2H8.694a1 1 0 0 0-.986.836L7.014 10h9.972l-.694-4.164A1 1 0 0 0 15.306 5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'IncognitoModeLine'

/**
 * MingCute Icon: Incognito Mode Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const IncognitoModeLine = memo(Icon)
