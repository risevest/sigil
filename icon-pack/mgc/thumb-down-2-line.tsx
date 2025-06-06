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
          d="M16.496 2.998a4 4 0 0 1 3.936 3.285l.909 5a4 4 0 0 1-3.936 4.715H15v2.5c0 1.933-1.626 3.124-3.155 3.419-.964.185-1.729-.442-2.024-1.131l-2.48-5.788H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3zm0 2H9v8.59a1 1 0 0 0 .08.394l2.545 5.936c.877-.224 1.375-.828 1.375-1.42v-2.5a2 2 0 0 1 2-2h2.405a2 2 0 0 0 1.968-2.358l-.909-5a2 2 0 0 0-1.968-1.642M7 4.998H6a1 1 0 0 0-.993.883L5 5.998v6a1 1 0 0 0 .883.993l.117.007h1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ThumbDown2Line'

/**
 * MingCute Icon: Thumb Down 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ThumbDown2Line = memo(Icon)
