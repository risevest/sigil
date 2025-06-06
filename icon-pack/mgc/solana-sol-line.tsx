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
          d="M7.293 4.293A1 1 0 0 1 8 4h13a1 1 0 0 1 .707 1.707l-3 3A1 1 0 0 1 18 9H5a1 1 0 0 1-.707-1.707zM8.414 6l-1 1h10.172l1-1zM6.293 16.293A1 1 0 0 1 7 16h13a1 1 0 0 1 .707 1.707l-3 3A1 1 0 0 1 17 21H4a1 1 0 0 1-.707-1.707zM7.414 18l-1 1h10.172l1-1zM5 10a1 1 0 0 0-.832 1.555l2 3A1 1 0 0 0 7 15h13a1 1 0 0 0 .832-1.555l-2-3A1 1 0 0 0 18 10zm2.535 3-.666-1h10.596l.666 1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SolanaSolLine'

/**
 * MingCute Icon: Solana Sol Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SolanaSolLine = memo(Icon)
