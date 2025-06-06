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
          d="M12 3a1 1 0 0 1 1 1v1h.764a2 2 0 0 1 .894.211L16.236 6H20a1 1 0 1 1 0 2h-.382l2.276 4.553c.07.139.106.292.106.447a4 4 0 0 1-8 0c0-.155.036-.308.106-.447L16.382 8h-.146a2 2 0 0 1-.894-.211L13.764 7H13v12h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V7h-.764l-1.578.789A2 2 0 0 1 7.764 8h-.146l2.276 4.553A1 1 0 0 1 10 13a4 4 0 0 1-8 0 1 1 0 0 1 .106-.447L4.382 8H4a1 1 0 0 1 0-2h3.764l1.578-.789A2 2 0 0 1 10.236 5H11V4a1 1 0 0 1 1-1M6 9.236l-1.989 3.977a2 2 0 0 0 3.978 0zm12 0-1.989 3.977a2 2 0 0 0 3.955.157l.023-.156z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BalanceLine'

/**
 * MingCute Icon: Balance Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BalanceLine = memo(Icon)
