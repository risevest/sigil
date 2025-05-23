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
          d="M4 3.5a1.5 1.5 0 0 1 1.493 1.356L5.5 5v12.5H20a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-1.493-1.356L2.5 19V5A1.5 1.5 0 0 1 4 3.5m16.193 2.818c1.346 0 2.02 1.627 1.068 2.578l-5.569 5.569a1.6 1.6 0 0 1-2.263 0l-2.404-2.404-2.475 2.475a1.5 1.5 0 1 1-2.121-2.122L9.894 8.95a1.6 1.6 0 0 1 2.262 0l2.405 2.405 2.181-2.182a1.5 1.5 0 0 1 .647-2.854z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ChartLineFill'

/**
 * MingCute Icon: Chart Line Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ChartLineFill = memo(Icon)
