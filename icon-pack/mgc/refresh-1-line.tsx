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
          d="M9.93 19.728a8.004 8.004 0 0 0 9.146-3.99 1 1 0 1 1 1.77.932c-2.13 4.04-6.836 6.221-11.434 4.99-5.335-1.43-8.5-6.913-7.071-12.248 1.43-5.335 6.913-8.5 12.247-7.071a10.003 10.003 0 0 1 7.414 9.58c.007.903-.995 1.402-1.713.92l-2.673-1.802c-1.008-.68-.332-2.251.854-1.986l1.058.236A8 8 0 1 0 9.93 19.728"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Refresh1Line'

/**
 * MingCute Icon: Refresh 1 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Refresh1Line = memo(Icon)
